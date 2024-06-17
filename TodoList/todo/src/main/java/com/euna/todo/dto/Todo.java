package com.euna.todo.dto;

import java.util.Date;

import lombok.Data;

@Data
public class Todo {
    private int no;
    private String name;
    private int status;
    private Date regDate;
    private Date updDate;
}
