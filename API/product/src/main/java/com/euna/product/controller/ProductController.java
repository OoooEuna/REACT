package com.euna.product.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

import com.euna.product.dto.Product;
import com.euna.product.service.ProductService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@CrossOrigin(origins =  "*")
@RestController
@RequestMapping("/products")
public class ProductController {

    @Autowired
    private ProductService productService;
    
    
    @GetMapping()
    public ResponseEntity<?> getAllProduct() {
        try {
           List<Product> productList = productService.list();
            return new ResponseEntity<>(productList, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<?> getOneProduct(@PathVariable String id) {
        try {
            Product product = productService.select(id);
            return new ResponseEntity<>(product, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @PostMapping()
    public ResponseEntity<?> createProduct(@RequestBody Product product) {
        try {
            int result = productService.insert(product);
            if(result > 0) 
                return new ResponseEntity<>("Create Product SUCCESS", HttpStatus.OK);
            else 
                return new ResponseEntity<>("Create Product FAIL", HttpStatus.OK);
            } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @PutMapping()
    public ResponseEntity<?> updateProduct(@RequestBody Product product) {
        log.info("product : " + product.toString());
        try {
            int result = productService.update(product);
            if (result > 0) 
                return new ResponseEntity<>("Update Result SUCCESS", HttpStatus.OK);
            else
                return new ResponseEntity<>("Update Result FAIL", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<?> destroyProduct(@PathVariable String id) {
        try {
            int result = productService.delete(id);
            if (result > 0) 
                return new ResponseEntity<>("Destroy Result SUCCESS", HttpStatus.OK);
            else
                return new ResponseEntity<>("Destroy Result FAIL", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
