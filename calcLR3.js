let btn = document.getElementById('btn');
	
btn.addEventListener('click', function (e) {
	let brokerLocation = "Orlando"

	let grossComLY = document.getElementById('grossComLY').value;
	let commissionSplitYC = document.getElementById('commissionSplitYC').value;
	let deskFeeYC = document.getElementById('deskFeeYC').value;
	let techFeeYC = document.getElementById('techFeeYC').value;
	let numTransLY = document.getElementById('numTransLY').value;
	let transFeeYC = document.getElementById('transFeeYC').value;
	let franFeeYC = document.getElementById('franFeeYC').value;
	let insurEOFeeYC = document.getElementById('insurEOFeeYC').value;

	let commissionSplitLR = document.getElementById('commissionSplitLR').value;
	let deskFeeLR = document.getElementById('deskFeeLR').value;
	let techFeeLR = document.getElementById('techFeeLR').value;
	let numTransLYLR = document.getElementById('numTransLY').value;
	let transFeeLR = document.getElementById('transFeeLR').value;
	let franFeeLR = document.getElementById('franFeeLR').value;
	let insurEOFeeLR = document.getElementById('insurEOFeeLR').value;

	// calculated variables
	let newGrossComLYLR = Math.round(grossComLY/(commissionSplitYC/100));
	let grossComSplitLR = newGrossComLYLR*commissionSplitLR/100;
	let totTransFeeYC = numTransLY*transFeeYC*1;
	let totTransFeeLR = numTransLYLR*transFeeLR*1;
	let totFranFeeYC = (franFeeYC/100)*grossComLY;
	let totinsEOFeeYC = insurEOFeeYC*numTransLY*1;
	let totinsEOFeeLR = insurEOFeeLR*numTransLYLR*1;
	let totFeesYC = (deskFeeYC*12)+(techFeeYC*12)+(totTransFeeYC*1)+
	(totFranFeeYC)+totinsEOFeeYC*1;
	let totFeesLR = (deskFeeLR*1)+(techFeeLR*12)+(franFeeLR*12)+
	totinsEOFeeLR*1;
	let netComYC = Math.round(grossComLY-totFeesYC);
	let netComLR = Math.round(newGrossComLYLR-totFeesLR);


	document.getElementById("grossComLYLR").value = newGrossComLYLR;
	document.getElementById("numTransLYLR").value = numTransLY;
	totalFeesYC.innerHTML = 'Total Fees: $ '+ (totFeesYC);
	totalFeesLR.innerHTML = 'Total Fees: $ '+ (totFeesLR)+'**';
	summarytotal.innerHTML = 'Summary:';
	otherIncome.innerHTML = 'Net Income With Your Company: $' + (netComYC);
	larosaIncome.innerHTML = 'Net Income With La Rosa ' + 
	(brokerLocation) + ':' + ' $' + (netComLR);
	incomeDifference.innerHTML = 'La Rosa Difference: $ ' + (netComLR-netComYC);
	noteLR.innerHTML = '**Transaction Fee at La Rosa ' + 
	(brokerLocation) + ' is paid by the customer.';
	})
