package com.dtk.report;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.Assert.assertThat;

import java.util.List;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.dtk.report.model.ReportModel;
import com.dtk.report.repo.ReportRepo;

@SpringBootTest
class ReportApplicationTests {
	@Autowired
    ReportRepo repo;
    
    @Test
    public void check() {
        List<ReportModel> list=repo.findAll();
        System.out.println(list);
        assertThat(list).size().isGreaterThan(0);
        
    }
}

