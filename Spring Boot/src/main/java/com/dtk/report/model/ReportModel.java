package com.dtk.report.model;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "dtk_report")
public class ReportModel {
//	@Id
//	private ObjectId _id;
	private String company;
	private Integer MH;
	private Integer DL;
	private Integer RJ;
	private Integer income;
	private String date;
	private String buyingType;
	private String incomeType;
	private String manufacturers;
//	public ObjectId get_id() {
//		return _id;
//	}
//	public void set_id(ObjectId _id) {
//		this._id = _id;
//	}
	public String getCompany() {
		return company;
	}
	public void setCompany(String company) {
		this.company = company;
	}
	public Integer getMH() {
		return MH;
	}
	public void setMH(Integer mH) {
		MH = mH;
	}
	public Integer getDL() {
		return DL;
	}
	public void setDL(Integer dL) {
		DL = dL;
	}
	public Integer getRJ() {
		return RJ;
	}
	public void setRJ(Integer rJ) {
		RJ = rJ;
	}
	public Integer getIncome() {
		return income;
	}
	public void setIncome(Integer income) {
		this.income = income;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public String getBuyingType() {
		return buyingType;
	}
	public void setBuyingType(String buyingType) {
		this.buyingType = buyingType;
	}
	public String getIncomeType() {
		return incomeType;
	}
	public void setIncomeType(String incomeType) {
		this.incomeType = incomeType;
	}
	public String getManufacturers() {
		return manufacturers;
	}
	public void setManufacturers(String manufacturers) {
		this.manufacturers = manufacturers;
	}
	
	
}
