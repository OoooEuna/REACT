package com.euna.todo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.euna.todo.dto.Todo;
import com.euna.todo.mapper.TodoMapper;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class TodoServiceImpl implements TodoService {

    @Autowired
    private TodoMapper todoMapper;
    

    @Override
    public List<Todo> list() throws Exception {
        List<Todo> todoList = todoMapper.list();
        return todoList;
    }

    @Override
    public Todo select(int no) throws Exception {
        Todo todo = todoMapper.select(no);
        return todo;
    }

    @Override
    public Todo insert(Todo todo) throws Exception {
        int result = todoMapper.insert(todo);
        log.info("todo : " + todo);
        log.info("result : " + result);
        int newTodoNo = todo.getNo();
        Todo newTodo = todoMapper.select(newTodoNo);
        return newTodo;
    }

    @Override
    public int update(Todo todo) throws Exception {
        int result = todoMapper.update(todo);
        return result;
    }

    @Override
    public int delete(int no) throws Exception {
        int result = todoMapper.delete(no);
        return result;
    }

    @Override
    public int completeAll() throws Exception {
        return todoMapper.completeAll();
    }

    @Override
    public int deleteAll() throws Exception {
        return todoMapper.deleteAll();
    }
    
}
