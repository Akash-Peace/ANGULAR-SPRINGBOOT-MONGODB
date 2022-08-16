package com.dtk.report.repo;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.dtk.report.model.ReportModel;

public interface ReportRepo extends MongoRepository<ReportModel, Integer>{
	
	@Query("{'buyingType': ?0, 'incomeType': ?1}")
	public List<ReportModel> queryData(String buyingType, String incomeType);
	
	
}
