var dateTimeLibAddress="0xbfffb78bbb3a27d78857021d162b64c577626b62";
var dateTimeLibAbi=[{"constant":true,"inputs":[{"name":"timestamp","type":"uint256"},{"name":"_hours","type":"uint256"}],"name":"subHours","outputs":[{"name":"newTimestamp","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"DOW_TUE","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"year","type":"uint256"},{"name":"month","type":"uint256"},{"name":"day","type":"uint256"}],"name":"timestampFromDate","outputs":[{"name":"timestamp","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"timestamp","type":"uint256"}],"name":"getDayOfWeek","outputs":[{"name":"dow","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"DOW_SUN","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"timestamp","type":"uint256"}],"name":"getHour","outputs":[{"name":"hour","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"timestamp","type":"uint256"},{"name":"_months","type":"uint256"}],"name":"addMonths","outputs":[{"name":"newTimestamp","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"timestamp","type":"uint256"}],"name":"isWeekEnd","outputs":[{"name":"weekEnd","type":"bool"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"timestamp","type":"uint256"},{"name":"_years","type":"uint256"}],"name":"addYears","outputs":[{"name":"newTimestamp","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"timestamp","type":"uint256"},{"name":"_years","type":"uint256"}],"name":"subYears","outputs":[{"name":"newTimestamp","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"timestamp","type":"uint256"},{"name":"_hours","type":"uint256"}],"name":"addHours","outputs":[{"name":"newTimestamp","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"SECONDS_PER_HOUR","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"year","type":"uint256"},{"name":"month","type":"uint256"},{"name":"day","type":"uint256"},{"name":"hour","type":"uint256"},{"name":"minute","type":"uint256"},{"name":"second","type":"uint256"}],"name":"timestampFromDateTime","outputs":[{"name":"timestamp","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"timestamp","type":"uint256"}],"name":"getDay","outputs":[{"name":"day","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"timestamp","type":"uint256"},{"name":"_days","type":"uint256"}],"name":"addDays","outputs":[{"name":"newTimestamp","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"SECONDS_PER_DAY","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"fromTimestamp","type":"uint256"},{"name":"toTimestamp","type":"uint256"}],"name":"diffMonths","outputs":[{"name":"_months","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"timestamp","type":"uint256"},{"name":"_minutes","type":"uint256"}],"name":"addMinutes","outputs":[{"name":"newTimestamp","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"timestamp","type":"uint256"}],"name":"getSecond","outputs":[{"name":"second","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"DOW_WED","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"timestamp","type":"uint256"},{"name":"_seconds","type":"uint256"}],"name":"addSeconds","outputs":[{"name":"newTimestamp","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"timestamp","type":"uint256"}],"name":"getYear","outputs":[{"name":"year","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"timestamp","type":"uint256"},{"name":"_minutes","type":"uint256"}],"name":"subMinutes","outputs":[{"name":"newTimestamp","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"timestamp","type":"uint256"}],"name":"getMonth","outputs":[{"name":"month","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"OFFSET19700101","outputs":[{"name":"","type":"int256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"timestamp","type":"uint256"},{"name":"_months","type":"uint256"}],"name":"subMonths","outputs":[{"name":"newTimestamp","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"year","type":"uint256"}],"name":"isLeapYear","outputs":[{"name":"leapYear","type":"bool"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"year","type":"uint256"},{"name":"month","type":"uint256"}],"name":"getDaysInMonth","outputs":[{"name":"dim","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"timestamp","type":"uint256"},{"name":"_days","type":"uint256"}],"name":"subDays","outputs":[{"name":"newTimestamp","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"DOW_SAT","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"fromTimestamp","type":"uint256"},{"name":"toTimestamp","type":"uint256"}],"name":"diffDays","outputs":[{"name":"_days","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"DOW_THU","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"DOW_FRI","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"timestamp","type":"uint256"}],"name":"isWeekDay","outputs":[{"name":"weekDay","type":"bool"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"timestamp","type":"uint256"}],"name":"timestampToDate","outputs":[{"name":"year","type":"uint256"},{"name":"month","type":"uint256"},{"name":"day","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"SECONDS_PER_MINUTE","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"timestamp","type":"uint256"}],"name":"timestampToDateTime","outputs":[{"name":"year","type":"uint256"},{"name":"month","type":"uint256"},{"name":"day","type":"uint256"},{"name":"hour","type":"uint256"},{"name":"minute","type":"uint256"},{"name":"second","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"timestamp","type":"uint256"},{"name":"_seconds","type":"uint256"}],"name":"subSeconds","outputs":[{"name":"newTimestamp","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"DOW_MON","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"timestamp","type":"uint256"}],"name":"getMinute","outputs":[{"name":"minute","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"fromTimestamp","type":"uint256"},{"name":"toTimestamp","type":"uint256"}],"name":"diffYears","outputs":[{"name":"_years","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"}];
var dateTimeLib=eth.contract(dateTimeLibAbi).at(dateTimeLibAddress);
var testDateTimeAddress="0xfd2dc31157ecf6599df9eafa6871afd33dbea620";
var testDateTimeAbi=[{"constant":true,"inputs":[{"name":"timestamp","type":"uint256"},{"name":"_hours","type":"uint256"}],"name":"subHours","outputs":[{"name":"newTimestamp","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"nextYear","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"year","type":"uint256"},{"name":"month","type":"uint256"},{"name":"day","type":"uint256"}],"name":"timestampFromDate","outputs":[{"name":"timestamp","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"timestamp","type":"uint256"}],"name":"getDayOfWeek","outputs":[{"name":"dow","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"timestamp","type":"uint256"}],"name":"getHour","outputs":[{"name":"hour","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"timestamp","type":"uint256"},{"name":"_months","type":"uint256"}],"name":"addMonths","outputs":[{"name":"newTimestamp","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"timestamp","type":"uint256"}],"name":"isWeekEnd","outputs":[{"name":"weekEnd","type":"bool"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"timestamp","type":"uint256"},{"name":"_years","type":"uint256"}],"name":"addYears","outputs":[{"name":"newTimestamp","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"timestamp","type":"uint256"},{"name":"_years","type":"uint256"}],"name":"subYears","outputs":[{"name":"newTimestamp","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"timestamp","type":"uint256"},{"name":"_hours","type":"uint256"}],"name":"addHours","outputs":[{"name":"newTimestamp","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"year","type":"uint256"},{"name":"month","type":"uint256"},{"name":"day","type":"uint256"},{"name":"hour","type":"uint256"},{"name":"minute","type":"uint256"},{"name":"second","type":"uint256"}],"name":"timestampFromDateTime","outputs":[{"name":"timestamp","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"timestamp","type":"uint256"}],"name":"getDay","outputs":[{"name":"day","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"timestamp","type":"uint256"},{"name":"_days","type":"uint256"}],"name":"addDays","outputs":[{"name":"newTimestamp","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"fromTimestamp","type":"uint256"},{"name":"toTimestamp","type":"uint256"}],"name":"diffMonths","outputs":[{"name":"_months","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"timestamp","type":"uint256"},{"name":"_minutes","type":"uint256"}],"name":"addMinutes","outputs":[{"name":"newTimestamp","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"timestamp","type":"uint256"}],"name":"getSecond","outputs":[{"name":"second","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"timestamp","type":"uint256"},{"name":"_seconds","type":"uint256"}],"name":"addSeconds","outputs":[{"name":"newTimestamp","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"timestamp","type":"uint256"}],"name":"getYear","outputs":[{"name":"year","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"timestamp","type":"uint256"},{"name":"_minutes","type":"uint256"}],"name":"subMinutes","outputs":[{"name":"newTimestamp","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"timestamp","type":"uint256"}],"name":"getMonth","outputs":[{"name":"month","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"timestamp","type":"uint256"},{"name":"_months","type":"uint256"}],"name":"subMonths","outputs":[{"name":"newTimestamp","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"year","type":"uint256"}],"name":"isLeapYear","outputs":[{"name":"leapYear","type":"bool"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"year","type":"uint256"},{"name":"month","type":"uint256"}],"name":"getDaysInMonth","outputs":[{"name":"dim","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"timestamp","type":"uint256"},{"name":"_days","type":"uint256"}],"name":"subDays","outputs":[{"name":"newTimestamp","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"fromTimestamp","type":"uint256"},{"name":"toTimestamp","type":"uint256"}],"name":"diffDays","outputs":[{"name":"_days","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"timestamp","type":"uint256"}],"name":"isWeekDay","outputs":[{"name":"weekDay","type":"bool"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"timestamp","type":"uint256"}],"name":"timestampToDate","outputs":[{"name":"year","type":"uint256"},{"name":"month","type":"uint256"},{"name":"day","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"timestamp","type":"uint256"}],"name":"timestampToDateTime","outputs":[{"name":"year","type":"uint256"},{"name":"month","type":"uint256"},{"name":"day","type":"uint256"},{"name":"hour","type":"uint256"},{"name":"minute","type":"uint256"},{"name":"second","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"timestamp","type":"uint256"},{"name":"_seconds","type":"uint256"}],"name":"subSeconds","outputs":[{"name":"newTimestamp","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":false,"inputs":[],"name":"test","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"timestamp","type":"uint256"}],"name":"getMinute","outputs":[{"name":"minute","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"fromTimestamp","type":"uint256"},{"name":"toTimestamp","type":"uint256"}],"name":"diffYears","outputs":[{"name":"_years","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"}];
var testDateTime=eth.contract(testDateTimeAbi).at(testDateTimeAddress);
console.log("testDateTime=" + JSON.stringify(testDateTime));
