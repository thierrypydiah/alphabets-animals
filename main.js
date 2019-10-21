
$('.button').click(function(){
	//Mouse enter

	$('.popup').addClass('active');

	$idnumber = $(this).attr('data-id');
	$alphabet = data[$idnumber];

	$English = $alphabet.English;
	$('.English').text($English);

	$French = $alphabet.French;
	$('.French').text($French);

	$Language1 = $alphabet.Language1;
	$('.Language1').text($Language1);

	$Language2 = $alphabet.Language2;
	$('.Language2').text($Language2);

	$Image = $alphabet.Image;
	$('.Image').attr('src',$Image);

	$Soundeng = $alphabet.Soundeng;
	$('.Soundeng').attr('src',$Soundeng);

	$Soundfr = $alphabet.Soundfr;
	$('.Soundfr').attr('src',$Soundfr);
});