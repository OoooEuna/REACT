package com.euna.server.service;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.euna.server.dto.Files;

import jakarta.servlet.http.HttpServletResponse;

public interface FileService {

    // 파일 목록
    public List<Files> list() throws Exception;
    // 파일 조회
    public Files select(int no) throws Exception;
    // 파일 등록
    public int insert(Files file) throws Exception;
    // 파일 수정
    public int update(Files file) throws Exception;
    // 파일 삭제
    public int delete(int no) throws Exception;

    // ⬆ 파일 업로드
    public Files upload(Files file) throws Exception;
    // 📃 여러 파일 업로드
    public List<Files> uploadFiles(Files file, List<MultipartFile> fileList) throws Exception;

    // ⬇ 파일 다운로드
    // public Files download(int no) throws Exception;
    public int download(int no, HttpServletResponse response) throws Exception;

    // 파일 목록 - 부모 기준
    public List<Files> listByParent(Files file) throws Exception;

    // 파일 선택 삭제
    public int deleteFiles(String no) throws Exception;

    // 파일 삭제 - 부모 기준
    public int deleteByParent(Files file) throws Exception;
    
}
 