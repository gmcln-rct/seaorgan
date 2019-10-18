export const dropdownBlock = `<form><select id="station_id">
<option value="None">-- Select U.S. Tides & Currents Station --</option>
<option value ="Cape Henry LB 2CH">Cape Henry LB 2CH - VA</option>
<option value ="York Spit LBB 22">York Spit LBB 22 - VA</option>
<option value ="Thimble Shoal LB 18">Thimble Shoal LB 18 - VA</option>
<option value ="Naval Station Norfolk LB 7">Naval Station Norfolk LB 7 - VA</option>
<option value ="Newport News Channel LB 14">Newport News Channel LB 14 - VA</option>
<option value ="Dominion Terminal">Dominion Terminal - VA</option>
<option value ="Rappahannock Shoal Channel LBB 60">Rappahannock Shoal Channel LBB 60 - VA</option>
<option value ="Potomac River MidChannel LWB B">Potomac River MidChannel LWB B - VA</option>
<option value ="Cove Point LNG Pier">Cove Point LNG Pier - VA</option>
<option value ="Chesapeake Channel LBB 92">Chesapeake Channel LBB 92 - VA</option>
<option value ="Tolchester Front Range">Tolchester Front Range - VA</option>
<option value ="Chesapeake City">Chesapeake City - VA</option>
<option value ="Aransas Pass LB6">Aransas Pass LB6 - TX</option>
<option value ="Port Aransas, Channel View">Port Aransas, Channel View - TX</option>
<option value ="Oxy Oil and Gas CM">Oxy Oil and Gas CM - TX</option>
<option value ="Cherry Point">Cherry Point - WA</option>
<option value ="Philadelphia">Philadelphia - PA</option>
<option value ="Delaware Bay Channel LB 10">Delaware Bay Channel LB 10 - DE</option>
<option value ="Galveston Bay Entr Channel LB 11">Galveston Bay Entr Channel LB 11 - TX</option>
<option value ="Fred Hartman Br., Houston Ship Channel">Fred Hartman Br., Houston Ship Channel - TX</option>
<option value ="Galveston Channel, west end">Galveston Channel, west end - TX</option>
<option value ="Cuyahoga River">Cuyahoga River - OH</option>
<option value ="Maumee River">Maumee River - OH</option>
<option value ="Humboldt Bay Entrance Channel LB 9">Humboldt Bay Entrance Channel LB 9 - CA</option>
<option value ="Chevron Pier">Chevron Pier - CA</option>
<option value ="Mile Point LB 20">Mile Point LB 20 - FL</option>
<option value ="Fulton Cutoff LB 34">Fulton Cutoff LB 34 - FL</option>
<option value ="Dames Point Bridge">Dames Point Bridge - FL</option>
<option value ="Trout River Cut LB 64">Trout River Cut LB 64 - FL</option>
<option value ="Acosta Bridge">Acosta Bridge - FL</option>
<option value ="Calcasieu Channel LB 36">Calcasieu Channel LB 36 - LA</option>
<option value ="Calcasieu Pass, Cameron Fishing Pier">Calcasieu Pass, Cameron Fishing Pier - LA</option>
<option value ="Lake Charles City Docks">Lake Charles City Docks - LA</option>
<option value ="First Street Wharf">First Street Wharf - LA</option>
<option value ="Port Allen">Port Allen - LA</option>
<option value ="Mobile State Dock Pier E">Mobile State Dock Pier E - AL</option>
<option value ="Mobile Container Terminal">Mobile Container Terminal - AL</option>
<option value ="Atchafalaya Bar Channel">Atchafalaya Bar Channel - LA</option>
<option value ="Matagorda Ship Channel Marker 19">Matagorda Ship Channel Marker 19 - TX</option>
<option value ="Matagorda Entrance Channel">Matagorda Entrance Channel - TX</option>
<option value ="Miami LB M">Miami LB M - FL</option>
<option value ="Miami LB1">Miami LB1 - FL</option>
<option value ="Miami LB3">Miami LB3 - FL</option>
<option value ="The Narrows">The Narrows - NY/NJ</option>
<option value ="Quonset Point">Quonset Point - RI</option>
<option value ="Groton, Thames River, Pier 6">Groton, Thames River, Pier 6 - CT</option>
<option value ="Martinez-AMORCO Pier">Martinez-AMORCO Pier - CA</option>
<option value ="Southampton Shoal Channel LB 6">Southampton Shoal Channel LB 6 - CA</option>
<option value ="Oakland Outer Harbor LB3">Oakland Outer Harbor LB3 - CA</option>
<option value ="Oakland Inner Harbor LB4">Oakland Inner Harbor LB4 - CA</option>
<option value ="Sabine Bank Channel LBB 34">Sabine Bank Channel LBB 34 - TX</option>
<option value ="USCG Sabine">USCG Sabine - TX</option>
<option value ="Sabine Front Range">Sabine Front Range - TX</option>
<option value ="West Port Arthur Bridge">West Port Arthur Bridge - TX</option>
<option value ="Rainbow Bridge">Rainbow Bridge - TX</option>
<option value ="Port of Beaumont">Port of Beaumont - TX</option>
<option value ="Port Arthur">Port Arthur - TX</option>
<option value ="Sunshine Skyway Bridge">Sunshine Skyway Bridge - FL</option>
<option value ="Old Port Tampa">Old Port Tampa - FL</option>
<option value ="Port Manatee">Port Manatee - FL</option>
</select>
<br>
<button type="submit" id="select-button" onClick='fetchEvent()'>Play The Sea</button>
<script>
   function callThisFunction() {
       let dropdown = document.getElementById("metric");
       let unit = dropdown.options[dropdown.selectedIndex].value;
       let nameOfUnit = dropdown.options[dropdown.selectedIndex].text;

       if (unit == "cm") {
           // do stuff
       } else if (unit == "ml") {
           // do stuff
       }
       // etc.
   }
</script>`