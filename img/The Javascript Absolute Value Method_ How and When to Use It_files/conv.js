(function() {
  var unixtime = parseInt((new Date)/1000) + Math.random();
  var f = document.getElementsByTagName('script')[0],
      j = document.createElement('img');
  j.async = true;
  j.src = '//b90.yahoo.co.jp/c?yahoo_ydn_conv_io=' + yahoo_ydn_conv_io + '&yahoo_ydn_conv_label=' + yahoo_ydn_conv_label + '&yahoo_ydn_conv_transaction_id=' + yahoo_ydn_conv_transaction_id + '&yahoo_ydn_conv_amount=' + yahoo_ydn_conv_amount + '&r=' + unixtime;
  f.parentNode.insertBefore(j, f);
})();
