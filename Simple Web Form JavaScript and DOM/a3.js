var CheckProvince = 1; // Identifies when Canada is Seleceted.


function MyReset() // When Reset Button is pushed, resets default
{	
document.getElementById("test").selectedIndex = "34";
CheckProvince = 1;	
}
/*-----------------Load Country List----------------*/
function start()
{
var a = countries.length;

 for (var x=0; x < a; x++)
 {
var b = document.createElement("option");
b.setAttribute("value",countries[x].code);
var c = document.createTextNode(countries[x].name)
b.appendChild(c);
document.getElementById("test").appendChild(b);
}
document.getElementById("test").selectedIndex="34";
}
/*----------Province will either be select or textbox option----------*/
function MyTest()
{
if ( document.getElementById("test").selectedIndex=="34" ) // If Canada is selected
{
 //Check for existing element
 var t = document.getElementById("province");
		if ( t.childNodes.length > 2 ) ClearOut();
		
 // Create Element
 var a = document.createElement("select");
 a.setAttribute("id", "provinces");
 a.setAttribute("name", "Province: ");
 document.getElementById("province").appendChild(a);
 
		// Append options for Canadian provinces
		var z = province.length;
		for ( var x = 0; x < z ; x++)
		{
		var b = document.createElement("option");
		b.setAttribute("value", province[x].code);
		var c = document.createTextNode(province[x].name);
		b.appendChild(c);
		document.getElementById("provinces").appendChild(b);
		}
		CheckProvince = 1; // sets
}
else // If Canada isn't selected
{

 //Check for existing element
 var t = document.getElementById("province");
		if ( t.childNodes.length > 2 ) ClearOut();
 
 //Create Element
 var a = document.createElement("input");
 a.setAttribute("type" , "text");
 a.setAttribute("name" , "Province: ");
 a.setAttribute("id","provinces");
 document.getElementById("province").appendChild(a);
 CheckProvince = 0; // resets
}
}
/*-------------------------------------------------------------------------*/
function ClearOut()
{
var t = document.getElementById("province");
var u = t.childNodes.length;

for  ( var x = 2; x < u; x++)
{
t.removeChild(t.childNodes[x]);
}


}
/*-----------------VALIDATION-----------------------------------------------*/
function MyValidate()
{
	if ( fname() && lname() && MyPass() && MyPhone() && MyProvince())
		return true;
	else return false;
}

function fname()
{
	var a = document.form.FName.value;
	var patt = /[^a-zA-Z\'\-]+/g;
	var patt2 = /[a-z]/i;

	if (patt.test(a) == true )
	{
		alert("Error for First Name:  Apostrophe, Hephen and Alphabet Characters only.  Must include ONE alphabet character");
		document.getElementById("d").focus();
		document.getElementById("d").select();
		return false;
	}
	else if ( patt2.test(a) == false )
	{
		alert("Error for First Name: Must include ONE alphabet character");
		document.getElementById("d").focus();
		document.getElementById("d").select();
		return false;
	}
	return true;
}	

function lname()
{
	var a = document.form.LName.value;
	var patt = /[^a-zA-Z\'\-]+/g;
	var patt2 = /[a-z]/i;	
	if (patt.test(a) == true )
	{
		alert("Error for Last Name:  Apostrophe, Hephen and Alphabet Characters only.  Must include ONE alphabet character");
		document.getElementById("e").focus();
		document.getElementById("e").select();
		return false;
	}
	else if ( patt2.test(a) == false )
	{
		alert("Error for Last Name: Must include ONE alphabet character");
		document.getElementById("e").focus();
		document.getElementById("e").select();
		return false;
	}
	return true;
}

function MyPass() //Password Validatoin
{
	var a = document.form.Password.value;
	var b = document.form.PasswordRetype.value;
	var patt = /[a-z]+/g; var patt2 = /[A-Z]+/g; var patt3 = /[0-9]+/g;
	
if (a.length > 8 )
{
	alert("Password can only be 8 characters long");
	document.getElementById("b").focus();
	document.getElementById("b").select();
	return false;
}
else if ( patt.test(a)==false || patt2.test(a)==false || patt3.test(a)==false) 
{
		alert("Password Fromat Incorrect, please use one lower and UPPER case alphabet, and at least one digit.");
		document.getElementById("b").focus(); document.getElementById("b").select();
		return false;
}
else if ( a != b)
{
	alert("Error:  Passwords do NOT match.");
	document.getElementById("c").focus(); document.getElementById("c").select();
	return false;
}
	return true;
}

function MyPhone()//Phone Number Validation
{
	var a = document.form.phone.value;
	var patt = /^[(][0-9]{3}[)][0-9]{3}[-][0-9]{4}$/g;
	var patt3 = /^[(][0]{3}[)][0-9]{3}[-][0-9]{4}$/g;
	var patt2 = /^[(][0]{3}[)][0]{3}[-][0]{4}$/g;
	
	var c = a.match(patt2);

		
	if ( patt.test(a) == false ) 
	{
		alert("Incorrect Phone Number:  Number must be in the format (999)999-9999 specifically");
		document.getElementById("g").focus(); document.getElementById("g").select();
		return false;
	}
	else if ( patt2.test(a) == true )
	{
		alert("Incorrect Phone Number:  Numbers Cannot be all 0's");
		document.getElementById("g").focus(); document.getElementById("g").select();
		return false;
	}
	else if ( patt3.test(a) == true )
	{
		alert("Incorrect Area Code:  Area Code Cannot be all 0's");
		document.getElementById("g").focus(); document.getElementById("g").select();
		return false;
	}
	return true;	
}

function MyProvince() // Province Validation
{
	if ( CheckProvince == 1 ) // Checks to see if Canada is selected.
	{
		 if ( document.getElementById("provinces").selectedIndex == "0" )
		{
			alert("Error:  Please Select a real Province.");
			document.getElementById("provinces").focus();
			return false;
		}				
	}	
	return true;
}
/*-------Provinces----------------------------------------------------------*/
var province = [
{"code": "ERR", "name": "--Select One--"},
{"code": "AB", "name": "Alberta"},
{"code": "BC", "name": "British Columbia"},
{"code": "MB", "name": "Manitoba"},
{"code": "NB", "name": "New Brunswick"},
{"code": "NL", "name": "Newfoundland and Labrador"},
{"code": "NT", "name": "Northwest Territories"},
{"code": "NS", "name": "Nova Scotia"},
{"code": "NU", "name": "Nunavut"},
{"code": "ON", "name": "Ontario"},
{"code": "PS", "name": "Prince Edward Island"},
{"code": "QC", "name": "Quebec"},
{"code": "SK", "name": "Saskatchewan"},
{"code": "YT", "name": "Yukon"},
]

/*--------------------------------------------------------------------------------*/
var countries = [
  {"code": "AD", "name": "Andorra", "calling_code": "+376 "},
  {"code": "AE", "name": "United Arab Emirates", "calling_code": "+971 "},
  {"code": "AF", "name": "Afghanistan", "calling_code": "+93 "},
  {"code": "AG", "name": "Antigua and Barbuda", "calling_code": "+1 268 "},
  {"code": "AI", "name": "Anguilla", "calling_code": "+1 264 "},
  {"code": "AL", "name": "Albania", "calling_code": "+355 "},
  {"code": "AM", "name": "Armenia", "calling_code": "+374 "},
  {"code": "AN", "name": "Netherlands Antilles", "calling_code": "+599 "},
  {"code": "AO", "name": "Angola", "calling_code": "+244 "},
  {"code": "AQ", "name": "Antarctica", "calling_code": "+6721 "},
  {"code": "AR", "name": "Argentina", "calling_code": "+54 "},
  {"code": "AS", "name": "American Samoa", "calling_code": "+1 "},
  {"code": "AT", "name": "Austria", "calling_code": "+43 "},
  {"code": "AU", "name": "Australia", "calling_code": "+61 "},
  {"code": "AW", "name": "Aruba", "calling_code": "+297 "},
  {"code": "AZ", "name": "Azerbaijan", "calling_code": "+994 "},
  {"code": "BA", "name": "Bosnia and Herzegovina", "calling_code": "+387 "},
  {"code": "BB", "name": "Barbados", "calling_code": "+1 246 "},
  {"code": "BD", "name": "Bangladesh", "calling_code": "+880 "},
  {"code": "BE", "name": "Belgium", "calling_code": "+32 "},
  {"code": "BF", "name": "Burkina Faso", "calling_code": "+226 "},
  {"code": "BG", "name": "Bulgaria", "calling_code": "+359 "},
  {"code": "BH", "name": "Bahrain", "calling_code": "+ 973"},
  {"code": "BI", "name": "Burundi", "calling_code": "+257 "},
  {"code": "BJ", "name": "Benin", "calling_code": "+229 "},
  {"code": "BM", "name": "Bermuda", "calling_code": "+1 441 "},
  {"code": "BN", "name": "Brunei Darussalam", "calling_code": "+673 "},
  {"code": "BO", "name": "Bolivia", "calling_code": "+591 "},
  {"code": "BR", "name": "Brazil", "calling_code": "+55 "},
  {"code": "BS", "name": "Bahamas", "calling_code": "+1 242 "},
  {"code": "BT", "name": "Bhutan", "calling_code": "+975 "},
  {"code": "BW", "name": "Botswana", "calling_code": "+267 "},
  {"code": "BY", "name": "Belarus", "calling_code": "+275 "},
  {"code": "BZ", "name": "Belize", "calling_code": "+501 "},
  {"code": "CA", "name": "Canada", "calling_code": "+1 "},
  {"code": "CF", "name": "Central African Republic", "calling_code": "+236 "},
  {"code": "CG", "name": "Congo", "calling_code": "+242 "},
  {"code": "CH", "name": "Switzerland", "calling_code": "+268 "},
  {"code": "CI", "name": "Cote D'Ivoire (Ivory Coast)", "calling_code": "+225 "},
  {"code": "CK", "name": "Cook Islands", "calling_code": "+682 "},
  {"code": "CL", "name": "Chile", "calling_code": "+56 "},
  {"code": "CM", "name": "Cameroon", "calling_code": "+237 "},
  {"code": "CN", "name": "China", "calling_code": "+86 "},
  {"code": "CO", "name": "Colombia", "calling_code": "+57 "},
  {"code": "CR", "name": "Costa Rica", "calling_code": "+506 "},
  {"code": "CS", "name": "Czechoslovakia (former)", "calling_code": "+420 "},
  {"code": "CU", "name": "Cuba", "calling_code": "+53 "},
  {"code": "CV", "name": "Cape Verde", "calling_code": "+238 "},
  {"code": "CY", "name": "Cyprus", "calling_code": "+357 "},
  {"code": "CZ", "name": "Czech Republic", "calling_code": "+420 "},
  {"code": "DE", "name": "Germany", "calling_code": "+49 "},
  {"code": "DJ", "name": "Djibouti", "calling_code": "+253 "},
  {"code": "DK", "name": "Denmark", "calling_code": "+45 "},
  {"code": "DM", "name": "Dominica", "calling_code": "+1 767 "},
  {"code": "DO", "name": "Dominican Republic", "calling_code": "+1 "},
  {"code": "DZ", "name": "Algeria", "calling_code": "+213 "},
  {"code": "EC", "name": "Ecuador", "calling_code": "+593 "},
  {"code": "EE", "name": "Estonia", "calling_code": "+372 "},
  {"code": "EG", "name": "Egypt", "calling_code": "+20 "},
  {"code": "ER", "name": "Eritrea", "calling_code": "+291 "},
  {"code": "ES", "name": "Spain", "calling_code": "+34 "},
  {"code": "ET", "name": "Ethiopia", "calling_code": "+251 "},
  {"code": "FI", "name": "Finland", "calling_code": "+358 "},
  {"code": "FJ", "name": "Fiji", "calling_code": "+679 "},
  {"code": "FK", "name": "Falkland Islands (Malvinas)", "calling_code": "+500 "},
  {"code": "FM", "name": "Micronesia", "calling_code": "+691 "},
  {"code": "FO", "name": "Faroe Islands", "calling_code": "+298 "},
  {"code": "FR", "name": "France", "calling_code": "+33 "},
  {"code": "GA", "name": "Gabon", "calling_code": "+241 "},
  {"code": "GB", "name": "Great Britain (UK)", "calling_code": "+44 "},
  {"code": "GD", "name": "Grenada", "calling_code": "+1 473 "},
  {"code": "GE", "name": "Georgia", "calling_code": "+995 "},
  {"code": "GF", "name": "French Guiana", "calling_code": "+594 "},
  {"code": "GH", "name": "Ghana", "calling_code": "+233 "},
  {"code": "GI", "name": "Gibraltar", "calling_code": "+350 "},
  {"code": "GL", "name": "Greenland", "calling_code": "+299 "},
  {"code": "GM", "name": "Gambia", "calling_code": "+220 "},
  {"code": "GN", "name": "Guinea", "calling_code": "+224 "},
  {"code": "GP", "name": "Guadeloupe", "calling_code": "+590 "},
  {"code": "GQ", "name": "Equatorial Guinea", "calling_code": "+240 "},
  {"code": "GR", "name": "Greece", "calling_code": "+30 "},
  {"code": "GT", "name": "Guatemala", "calling_code": "+502 "},
  {"code": "GU", "name": "Guam", "calling_code": "+1 671 "},
  {"code": "GW", "name": "Guinea-Bissau", "calling_code": "+245 "},
  {"code": "GY", "name": "Guyana", "calling_code": "+592 "},
  {"code": "HK", "name": "Hong Kong", "calling_code": "+852 "},
  {"code": "HM", "name": "Heard and McDonald Islands", "calling_code": "+ "},
  {"code": "HN", "name": "Honduras", "calling_code": "+504 "},
  {"code": "HR", "name": "Croatia (Hrvatska)", "calling_code": "+385 "},
  {"code": "HT", "name": "Haiti", "calling_code": "+509 "},
  {"code": "HU", "name": "Hungary", "calling_code": "+ 36"},
  {"code": "ID", "name": "Indonesia", "calling_code": "+62 "},
  {"code": "IE", "name": "Ireland", "calling_code": "+353 "},
  {"code": "IL", "name": "Israel", "calling_code": "+972 "},
  {"code": "IN", "name": "India", "calling_code": "+91 "},
  {"code": "IO", "name": "British Indian Ocean Territory", "calling_code": "+ "},
  {"code": "IQ", "name": "Iraq", "calling_code": "+964 "},
  {"code": "IR", "name": "Iran", "calling_code": "+98 "},
  {"code": "IS", "name": "Iceland", "calling_code": "+354 "},
  {"code": "IT", "name": "Italy", "calling_code": "+39 "},
  {"code": "JM", "name": "Jamaica", "calling_code": "+1 876 "},
  {"code": "JO", "name": "Jordan", "calling_code": "+962 "},
  {"code": "JP", "name": "Japan", "calling_code": "+91 "},
  {"code": "KE", "name": "Kenya", "calling_code": "+254 "},
  {"code": "KG", "name": "Kyrgyzstan", "calling_code": "+996 "},
  {"code": "KH", "name": "Cambodia", "calling_code": "+855 "},
  {"code": "KI", "name": "Kiribati", "calling_code": "+686 "},
  {"code": "KM", "name": "Comoros", "calling_code": "+269 "},
  {"code": "KN", "name": "Saint Kitts and Nevis", "calling_code": "+1 869 "},
  {"code": "KP", "name": "Korea (North)", "calling_code": "+856 "},
  {"code": "KR", "name": "Korea (South)", "calling_code": "+82 "},
  {"code": "KW", "name": "Kuwait", "calling_code": "+965 "},
  {"code": "KY", "name": "Cayman Islands", "calling_code": "+ "},
  {"code": "KZ", "name": "Kazakhstan", "calling_code": "+7 "},
  {"code": "LA", "name": "Laos", "calling_code": "+856 "},
  {"code": "LB", "name": "Lebanon", "calling_code": "+961 "},
  {"code": "LC", "name": "Saint Lucia", "calling_code": "+1 758 "},
  {"code": "LI", "name": "Liechtenstein", "calling_code": "+423 "},
  {"code": "LK", "name": "Sri Lanka", "calling_code": "+94 "},
  {"code": "LR", "name": "Liberia", "calling_code": "+231 "},
  {"code": "LS", "name": "Lesotho", "calling_code": "+266 "},
  {"code": "LT", "name": "Lithuania", "calling_code": "+370 "},
  {"code": "LU", "name": "Luxembourg", "calling_code": "+352 "},
  {"code": "LV", "name": "Latvia", "calling_code": "+371 "},
  {"code": "LY", "name": "Libya", "calling_code": "+218 "},
  {"code": "MA", "name": "Morocco", "calling_code": "+212 "},
  {"code": "MC", "name": "Monaco", "calling_code": "+377 "},
  {"code": "MD", "name": "Moldova", "calling_code": "+373 "},
  {"code": "MG", "name": "Madagascar", "calling_code": "+261 "},
  {"code": "MH", "name": "Marshall Islands", "calling_code": "+692 "},
  {"code": "MK", "name": "Macedonia", "calling_code": "+389 "},
  {"code": "ML", "name": "Mali", "calling_code": "+223 "},
  {"code": "MM", "name": "Myanmar", "calling_code": "+95 "},
  {"code": "MN", "name": "Mongolia", "calling_code": "+976 "},
  {"code": "MO", "name": "Macau", "calling_code": "+853 "},
  {"code": "MP", "name": "Northern Mariana Islands", "calling_code": "+1 670 "},
  {"code": "MQ", "name": "Martinique", "calling_code": "+596 "},
  {"code": "MR", "name": "Mauritania", "calling_code": "+222 "},
  {"code": "MS", "name": "Montserrat", "calling_code": "+1 664 "},
  {"code": "MT", "name": "Malta", "calling_code": "+356 "},
  {"code": "MU", "name": "Mauritius", "calling_code": "+230 "},
  {"code": "MV", "name": "Maldives", "calling_code": "+960 "},
  {"code": "MW", "name": "Malawi", "calling_code": "+265 "},
  {"code": "MX", "name": "Mexico", "calling_code": "+52 "},
  {"code": "MY", "name": "Malaysia", "calling_code": "+60 "},
  {"code": "MZ", "name": "Mozambique", "calling_code": "+258 "},
  {"code": "NA", "name": "Namibia", "calling_code": "+264 "},
  {"code": "NC", "name": "New Caledonia", "calling_code": "+687 "},
  {"code": "NE", "name": "Niger", "calling_code": "+227 "},
  {"code": "NF", "name": "Norfolk Island", "calling_code": "+6723 "},
  {"code": "NG", "name": "Nigeria", "calling_code": "+234 "},
  {"code": "NI", "name": "Nicaragua", "calling_code": "+505 "},
  {"code": "NL", "name": "Netherlands", "calling_code": "+599 "},
  {"code": "NO", "name": "Norway", "calling_code": "+47 "},
  {"code": "NP", "name": "Nepal", "calling_code": "+977 "},
  {"code": "NR", "name": "Nauru", "calling_code": "+674 "},
  {"code": "NT", "name": "Neutral Zone", "calling_code": "+ "},
  {"code": "NU", "name": "Niue", "calling_code": "+683 "},
  {"code": "NZ", "name": "New Zealand (Aotearoa)", "calling_code": "+64 "},
  {"code": "OM", "name": "Oman", "calling_code": "+968 "},
  {"code": "PA", "name": "Panama", "calling_code": "+507 "},
  {"code": "PE", "name": "Peru", "calling_code": "+51 "},
  {"code": "PF", "name": "French Polynesia", "calling_code": "+689 "},
  {"code": "PG", "name": "Papua New Guinea", "calling_code": "+675 "},
  {"code": "PH", "name": "Philippines", "calling_code": "+63 "},
  {"code": "PK", "name": "Pakistan", "calling_code": "+92 "},
  {"code": "PL", "name": "Poland", "calling_code": "+48 "},
  {"code": "PM", "name": "St. Pierre and Miquelon", "calling_code": "+508 "},
  {"code": "PN", "name": "Pitcairn", "calling_code": "+ "},
  {"code": "PR", "name": "Puerto Rico", "calling_code": "+1 "},
  {"code": "PT", "name": "Portugal", "calling_code": "+351 "},
  {"code": "PW", "name": "Palau", "calling_code": "+680 "},
  {"code": "PY", "name": "Paraguay", "calling_code": "+595 "},
  {"code": "QA", "name": "Qatar", "calling_code": "+974 "},
  {"code": "RE", "name": "Reunion", "calling_code": "+262 "},
  {"code": "RO", "name": "Romania", "calling_code": "+40 "},
  {"code": "RU", "name": "Russia", "calling_code": "+7 "},
  {"code": "RW", "name": "Rwanda", "calling_code": "+250 "},
  {"code": "SA", "name": "Saudi Arabia", "calling_code": "+966 "},
  {"code": "Sb", "name": "Solomon Islands", "calling_code": "+677 "},
  {"code": "SC", "name": "Seychelles", "calling_code": "+248 "},
  {"code": "SD", "name": "Sudan", "calling_code": "+249 "},
  {"code": "SE", "name": "Sweden", "calling_code": "+46 "},
  {"code": "SG", "name": "Singapore", "calling_code": "+65 "},
  {"code": "SH", "name": "St. Helena", "calling_code": "+390 "},
  {"code": "SI", "name": "Slovenia", "calling_code": "+386 "},
  {"code": "SJ", "name": "Svalbard and Jan Mayen Islands", "calling_code": "+ "},
  {"code": "SK", "name": "Slovak Republic", "calling_code": "+421 "},
  {"code": "SL", "name": "Sierra Leone", "calling_code": "+232 "},
  {"code": "SN", "name": "Senegal", "calling_code": "+221 "},
  {"code": "SO", "name": "Somalia", "calling_code": "+252 "},
  {"code": "SR", "name": "Suriname", "calling_code": "+597 "},
  {"code": "ST", "name": "Sao Tome and Principe", "calling_code": "+239 "},
  {"code": "SY", "name": "Syria", "calling_code": "+963 "},
  {"code": "SZ", "name": "Swaziland", "calling_code": "+268 "},
  {"code": "TC", "name": "Turks and Caicos Islands", "calling_code": "+1 649 "},
  {"code": "TD", "name": "Chad", "calling_code": "+235 "},
  {"code": "TG", "name": "Togo", "calling_code": "+228 "},
  {"code": "TH", "name": "Thailand", "calling_code": "+66 "},
  {"code": "TJ", "name": "Tajikistan", "calling_code": "+992 "},
  {"code": "TK", "name": "Tokelau", "calling_code": "+690 "},
  {"code": "TM", "name": "Turkmenistan", "calling_code": "+993 "},
  {"code": "TN", "name": "Tunisia", "calling_code": "+216 "},
  {"code": "TO", "name": "Tonga", "calling_code": "+676 "},
  {"code": "TP", "name": "East Timor", "calling_code": "+670 "},
  {"code": "TR", "name": "Turkey", "calling_code": "+90 "},
  {"code": "TT", "name": "Trinidad and Tobago", "calling_code": "+1 868 "},
  {"code": "TV", "name": "Tuvalu", "calling_code": "+688 "},
  {"code": "TW", "name": "Taiwan", "calling_code": "+886 "},
  {"code": "TZ", "name": "Tanzania", "calling_code": "+255 "},
  {"code": "UA", "name": "Ukraine", "calling_code": "+380 "},
  {"code": "UG", "name": "Uganda", "calling_code": "+256 "},
  {"code": "UK", "name": "United Kingdom", "calling_code": "+44 "},
  {"code": "US", "name": "United States", "calling_code": "+1 "},
  {"code": "UY", "name": "Uruguay", "calling_code": "+598 "},
  {"code": "UZ", "name": "Uzbekistan", "calling_code": "+998 "},
  {"code": "VA", "name": "Vatican City State (Holy See)", "calling_code": "+ "},
  {"code": "VC", "name": "Saint Vincent and the Grenadines", "calling_code": "+1 748 "},
  {"code": "VE", "name": "Venezuela", "calling_code": "+58 "},
  {"code": "VN", "name": "Viet Nam", "calling_code": "+84 "},
  {"code": "VU", "name": "Vanuatu", "calling_code": "+678 "},
  {"code": "WF", "name": "Wallis and Futuna Islands", "calling_code": "+681 "},
  {"code": "WS", "name": "Samoa", "calling_code": "+685 "},
  {"code": "YE", "name": "Yemen", "calling_code": "+260 "},
  {"code": "YT", "name": "Mayotte", "calling_code": "+262 "},
  {"code": "ZA", "name": "South Africa", "calling_code": "+27 "},
  {"code": "ZM", "name": "Zambia", "calling_code": "+263 "},
  {"code": "ZW", "name": "Zimbabwe", "calling_code": "+263 "}
];