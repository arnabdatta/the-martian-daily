import React from 'react';

function getMarsDate() {
    var currentEarthDate = new Date();
    
    var earthTime = currentEarthDate.getTime();
    var julianDate = (earthTime / 86400000) - (currentEarthDate.getTimezoneOffset()/1440) + 2440587.5;
    const cJulianDate = 'Julian Date (on Earth) : ' + Math.round(julianDate);

    var sol;
    var ls;
    var martianYear;
    var martianMonth;
    var marsTime;

    //reference: http://www-mars.lmd.jussieu.fr/mars/time/martian_time.html Thanks!!
    var jdateRef=2.442765667e6; // 19/12/1975 4:00:00, such that Ls=0
    // jdatRef is also the begining of Martian Year "12"
    var martianyearRef = 12;
    var earthday = 86400.0;
    var marsday = 88775.245;
    var marsyear = 668.60;

    // Difference between TAI and UTC. This value should be
    // updated each time the IERS announces a leap second.
    var tai_offset = 37;

    sol = ( julianDate - jdateRef ) * earthday / marsday;

    martianYear = martianyearRef;
    // Compute Martian Year #, along with sol value
    // sol being computed modulo the number of sols in a martian year
    while ( sol >= marsyear ) {
        sol = sol - marsyear;
        martianYear = martianYear + 1;
    }
    while ( sol < 0.0 ) {
        sol = sol + marsyear;
        martianYear = martianYear - 1;
    }

    // from jtauber.github.io/mars-clock/  Thanks!
    var millis = new Date().getTime();
                var jd_ut = 2440587.5 + (millis / 8.64E7);
                var jd_tt = jd_ut + (tai_offset + 32.184) / 86400;
                var j2000 = jd_tt - 2451545.0;
                var m = (19.3870 + 0.52402075 * j2000) % 360;
                var alpha_fms = (270.3863 + 0.52403840 * j2000) % 360;
                var e = (0.09340 + 2.477E-9 * j2000);
                var pbs =
                    0.0071 * cos((0.985626 * j2000 /  2.2353) +  49.409) +
                    0.0057 * cos((0.985626 * j2000 /  2.7543) + 168.173) +
                    0.0039 * cos((0.985626 * j2000 /  1.1177) + 191.837) +
                    0.0037 * cos((0.985626 * j2000 / 15.7866) +  21.736) +
                    0.0021 * cos((0.985626 * j2000 /  2.1354) +  15.704) +
                    0.0020 * cos((0.985626 * j2000 /  2.4694) +  95.528) +
                    0.0018 * cos((0.985626 * j2000 / 32.8493) +  49.095);
                var nu_m = (10.691 + 3.0E-7 * j2000) * sin(m) +
                    0.623 * sin(2 * m) +
                    0.050 * sin(3 * m) +
                    0.005 * sin(4 * m) +
                    0.0005 * sin(5 * m) +
                    pbs;
                var nu = nu_m + m;
                var l_s = (alpha_fms + nu_m) % 360;
                var eot = 2.861 * sin(2 * l_s) - 0.071 * sin(4 * l_s) + 0.002 * sin(6 * l_s) - nu_m;
                var eot_h = eot * 24 / 360;
                var msd = (((j2000 - 4.5) / 1.027491252) + 44796.0 - 0.00096);
                var mtc = (24 * msd) % 24;


    marsTime = h_to_hms(mtc);

    const cMartianYear = 'Martian Year : ' + martianYear;
    const cMarsSol = 'Sol (Day on Mars) : ' + (1 + Math.floor(sol));
    //const cEarthDateStr = 'Current Earth date: ' + currentEarthDate.getDate();
    const cMarsTime = 'Mars Time: ' + marsTime;
    const cMarsDateStr = cMartianYear + ' | ' + cMarsSol  + ' | ' + cMarsTime + ' | ' +  cJulianDate;
    
    return(
        cMarsDateStr
    )
    
}

function h_to_hms(h) {
    var x = h * 3600;
    var hh = Math.floor(x / 3600);
    if (hh < 10) hh = "0" + hh;
    var y = x % 3600;
    var mm = Math.floor(y / 60);
    if (mm < 10) mm = "0" + mm;
    var ss = Math.round(y % 60);
    if (ss < 10) ss = "0" + ss;
    return hh + ":" + mm + ":" + ss;
}

function cos(deg) {
    return Math.cos(deg * Math.PI / 180);
}
function sin(deg) {
    return Math.sin(deg * Math.PI / 180);
}


class MarsDate extends React.Component {

    render() {
        return(
            getMarsDate()
        )
    }
}

export default MarsDate;