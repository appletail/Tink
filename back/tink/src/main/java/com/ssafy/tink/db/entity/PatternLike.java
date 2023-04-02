package com.ssafy.tink.db.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "pattern_likes")
@IdClass(PatternLike.class)
@Getter
@NoArgsConstructor
public class PatternLike implements Serializable {

	@Id
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "member_id", referencedColumnName = "member_id", nullable = false)
	private Member member;

	@Id
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "pattern_id", referencedColumnName = "pattern_id", nullable = false)
	private Pattern pattern;

	@Builder
	public PatternLike(Member member, Pattern pattern) {
		this.member = member;
		this.pattern = pattern;
	}

}
