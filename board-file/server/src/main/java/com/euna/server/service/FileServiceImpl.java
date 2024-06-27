package com.euna.server.service;

import java.io.File;
import java.io.FileInputStream;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.multipart.MultipartFile;

import com.euna.server.dto.Files;
import com.euna.server.mapper.FileMapper;

import jakarta.servlet.ServletOutputStream;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class FileServiceImpl implements FileService {

    @Autowired
    private FileMapper fileMapper;

    @Value("${upload.path}")
    private File uploadPath;      // 업로드 경로

    @Override
    public List<Files> list() throws Exception {
        return fileMapper.list();
    }

    @Override
    public Files select(int no) throws Exception {
        return fileMapper.select(no);
    }

    @Override
    public int insert(Files file) throws Exception {
        return fileMapper.insert(file);
    }

    @Override
    public int update(Files file) throws Exception {
        return fileMapper.update(file);
    }

    @Override
    public int delete(int no) throws Exception {
        // 1️⃣ 파일 정보 조회
        Files file = fileMapper.select(no);
        // 2️⃣ 파일 경로로 파일 객체 접근
        String filePath = file.getFilePath();
        File deleteFile = new File(filePath);
        // 3️⃣ 파일 시스템의 파일 삭제
        // - 파일 존재 여부 확인
        if ( !deleteFile.exists() ) return 0;

        // - 파일 삭제
        boolean deleted = deleteFile.delete();
        // 4️⃣ DB의 파일 데이터 삭제
        int result = 0;
        if ( deleted ) {
            result = fileMapper.delete(no);
            return result;
        }
        return result;
        
    }

    @Override
    public List<Files> listByParent(Files file) throws Exception {
        List<Files> fileList = fileMapper.listByParent(file);
        return fileList;
    }

    @Override
    public Files upload(Files file) throws Exception {
        Files uploadedFile = uploadFile(file, file.getFile());
        if ( uploadedFile != null ){
            log.info("파일 업로드 성공!");
        }
        return uploadedFile;
    }

    // 파일 업로드 로직
    public Files uploadFile(Files fileInfo, MultipartFile file) throws Exception {
        int result = 0;
        if( file.isEmpty() ) return null;

        // 📃 파일 정보 : 파일 원본명, 사이즈, 데이터
        String originName = file.getOriginalFilename();
        long fileSize = file.getSize();
        byte[] fileData = file.getBytes();

        // 파일명 중복 방지
        String fileName = UUID.randomUUID().toString() + "_" + originName;
        String filePath = uploadPath + "/" + fileName;

        // 📃⬆ 파일 시스템에 복사 (업로드)
        File uploadFile = new File(uploadPath, fileName);
        FileCopyUtils.copy(fileData, uploadFile);

        // DB에 파일 정보 등록
        Files uploadedFile = new Files();
        uploadedFile.setParentTable(fileInfo.getParentTable());
        uploadedFile.setParentNo(fileInfo.getParentNo());
        uploadedFile.setFileName(fileName);
        uploadedFile.setOriginName(originName);
        uploadedFile.setFilePath(filePath);
        uploadedFile.setFileSize(fileSize);
        uploadedFile.setFileCode(fileInfo.getFileCode());

        result = fileMapper.insert(uploadedFile);
        log.info("result : " + result);
        return uploadedFile;
    }

    
    @Override
    public List<Files> uploadFiles(Files fileInfo, List<MultipartFile> fileList) throws Exception {
        List<Files> uploadedFileList = new ArrayList<Files>();
        for (MultipartFile file : fileList) {
            Files uploadedFile = uploadFile(fileInfo, file);
            uploadedFileList.add(uploadedFile);
            log.info("업로드된 파일 : " + uploadedFile);
        }
        return uploadedFileList;
    }

    // @Override
    // public Files download(int no) throws Exception {
    //     throw new UnsupportedOperationException("Unimplemented method 'download'");
    // }

    @Override
    public int download(int no, HttpServletResponse response) throws Exception {

        Files file = fileMapper.select(no);

        // 클라이언트 측에서 파일 번호가 없는 걸 잘못 줬을 때
        // BAD_REQUEST : 400, 클라이언트의 요청이 잘못되었음을 알리는 상태코드
        if( file == null ) {
            response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
            return 0;
        }

        String filePath = file.getFilePath();       // 파일 경로
        String fileName = file.getFileName();       // 파일 이름

        // 파일 다운로드를 위한 🎫 헤더 세팅
        // - Content-Type        : application/octet-stream
        // - Content-Disposition : attachment, filename="파일명.확장자" 
        response.setContentType(MediaType.APPLICATION_OCTET_STREAM_VALUE);
        response.setHeader("Content-Disposition", 
                           "attachment; filename=\"" + fileName + "\"");

        // 📃⬇ 파일 다운로드
        // - 파일 입력
        File downloadFile = new File(filePath);
        FileInputStream fis = new FileInputStream(downloadFile);

        // - 파일 출력
        ServletOutputStream sos = response.getOutputStream();

        // - 다운로드
        FileCopyUtils.copy(fis, sos);

        // byte[] buffer = new byte[1024];             // 1024bytes : 1KB
        // int data;
        // while ( (data = fis.read(buffer)) != -1 ) { // 1KB 입력
        //     sos.write(buffer, 0, data);             // 1KB 출력 (전송)
        // }
        fis.close();
        sos.close();
        return 1;
    }

    @Override
    public int deleteFiles(String no) throws Exception {
        String[] noList = no.split(",");

        int result = 0;
        for (String deleteNo : noList) {
            int fileNo = Integer.parseInt(deleteNo);
            result += delete(fileNo);
        }
        return result;
        // return fileMapper.deleteFiles(no);
    }

    @Override
    public int deleteByParent(Files file) throws Exception {
        return fileMapper.deleteByParent(file);
    }
    
}
