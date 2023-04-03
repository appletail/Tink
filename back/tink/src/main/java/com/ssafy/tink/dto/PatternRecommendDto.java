package com.ssafy.tink.dto;

import com.ssafy.tink.db.entity.Pattern;

import io.swagger.annotations.ApiModel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@ApiModel("PatternRecommendDto")
@Getter
@NoArgsConstructor
public class PatternRecommendDto {

	Float gauge;
	Float gaugeDivisor;
	Float rowGauge;
	int yardage;
	int yardageMax;

	@Builder
	public PatternRecommendDto(Pattern pattern) {
		this.gauge = pattern.getGauge();
		this.gaugeDivisor = pattern.getGaugeDivisor();
		this.rowGauge = pattern.getRowGauge();
		this.yardage = pattern.getYardage();
		this.yardageMax = pattern.getYardageMax();
	}

}
