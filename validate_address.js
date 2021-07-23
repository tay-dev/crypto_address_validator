function valid_add(type, value){
	
	var re = {
		BTC: /^(bc1|[13])[a-zA-HJ-NP-Z0-9]{25,39}$/,
		ERC20: /^0x[a-fA-F0-9]{40}$/,
		DOGE: /^D{1}[5-9A-HJ-NP-U]{1}[1-9A-HJ-NP-Za-km-z]{32}$/,
		LTC: /^[LM3][a-km-zA-HJ-NP-Z1-9]{26,33}$/,
		DASH: /^X[1-9A-HJ-NP-Za-km-z]{33}$/,
		BCH: /^([13][a-km-zA-HJ-NP-Z1-9]{25,34})|^((bitcoincash:)?(q|p)[a-z0-9]{41})|^((BITCOINCASH:)?(Q|P)[A-Z0-9]{41})$/,
		XRP: /^r[0-9a-zA-Z]{24,34}$/,
		XMR: /^[48][0-9AB][1-9A-HJ-NP-Za-km-z]{93}$/,
		RVN: /^R[a-zA-HJ-NP-Z0-9]{25,39}$/,
	};
	
	var regex = new RegExp(re[type]);
	
	return regex.test(value);
}
