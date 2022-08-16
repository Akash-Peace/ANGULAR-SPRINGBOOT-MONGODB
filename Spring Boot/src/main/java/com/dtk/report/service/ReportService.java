package com.dtk.report.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dtk.report.model.ReportModel;
import com.dtk.report.repo.ReportRepo;

@Service
public class ReportService {
	@Autowired
	private ReportRepo reportRepo;
	public List<ReportModel> fetchData(String buyingType, String incomeType){
		return reportRepo.queryData(buyingType, incomeType);
	}
}
