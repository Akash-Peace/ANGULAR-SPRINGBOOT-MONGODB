package com.dtk.report.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.dtk.report.model.ReportModel;
import com.dtk.report.service.ReportService;

@CrossOrigin
@RestController
@RequestMapping("/niq")
public class ReportController {
	@Autowired
	private ReportService reportService;
	@GetMapping("/getdata")
	public List<ReportModel> getData(@RequestParam String buyingType, String incomeType){
		return reportService.fetchData(buyingType, incomeType);
	}
}
