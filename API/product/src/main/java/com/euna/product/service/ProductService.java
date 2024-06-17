package com.euna.product.service;

import com.euna.product.dto.Product;
import java.util.List;

public interface ProductService {

    public List<Product> list() throws Exception;

    public Product select(String id) throws Exception;

    public int insert(Product product) throws Exception;

    public int update(Product product) throws Exception;

    public int delete(String id) throws Exception;
    
}
