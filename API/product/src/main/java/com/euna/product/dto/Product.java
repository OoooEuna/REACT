package com.euna.product.dto;

import java.util.Date;

import lombok.Data;

@Data
public class Product {
    private int no;
    private String id;
    private String name;
    private int price;
    private String img;
    private Date createdAt; 
    private Date updatedAt; 
}
