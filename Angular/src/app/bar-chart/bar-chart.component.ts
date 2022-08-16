import { Component, OnInit } from '@angular/core';

import * as d3 from 'd3';

// import { BarChart } from '';

import data from '../data.json';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css'],
})
export class BarChartComponent implements OnInit {
  private states = [
    {
      name: 'AL',
      '<10': 598478,
      '10-19': 638789,
      '20-29': 661666,
      '30-39': 603013,
      '40-49': 625599,
      '50-59': 673864,
      '60-69': 548376,
      '70-79': 316598,
      '≥80': 174781,
    },
    {
      name: 'AK',
      '<10': 106741,
      '10-19': 99926,
      '20-29': 120674,
      '30-39': 102008,
      '40-49': 91539,
      '50-59': 104569,
      '60-69': 70473,
      '70-79': 28422,
      '≥80': 12503,
    },
    {
      name: 'AZ',
      '<10': 892083,
      '10-19': 912735,
      '20-29': 939804,
      '30-39': 857054,
      '40-49': 833290,
      '50-59': 834858,
      '60-69': 737884,
      '70-79': 466153,
      '≥80': 254716,
    },
    {
      name: 'AR',
      '<10': 392177,
      '10-19': 397185,
      '20-29': 399698,
      '30-39': 372998,
      '40-49': 370157,
      '50-59': 395070,
      '60-69': 329734,
      '70-79': 197985,
      '≥80': 113468,
    },
    {
      name: 'CA',
      '<10': 5038433,
      '10-19': 5170341,
      '20-29': 5809455,
      '30-39': 5354112,
      '40-49': 5179258,
      '50-59': 5042094,
      '60-69': 3737461,
      '70-79': 2011678,
      '≥80': 1311374,
    },
    {
      name: 'CO',
      '<10': 690830,
      '10-19': 697447,
      '20-29': 780508,
      '30-39': 766382,
      '40-49': 705450,
      '50-59': 725661,
      '60-69': 563376,
      '70-79': 274466,
      '≥80': 155175,
    },
    {
      name: 'CT',
      '<10': 399369,
      '10-19': 481065,
      '20-29': 462323,
      '30-39': 424890,
      '40-49': 496265,
      '50-59': 546361,
      '60-69': 400995,
      '70-79': 217827,
      '≥80': 159475,
    },
    {
      name: 'DE',
      '<10': 112177,
      '10-19': 117854,
      '20-29': 127554,
      '30-39': 114063,
      '40-49': 117588,
      '50-59': 133331,
      '60-69': 110822,
      '70-79': 65369,
      '≥80': 35937,
    },
    {
      name: 'DC',
      '<10': 74377,
      '10-19': 62783,
      '20-29': 136976,
      '30-39': 121520,
      '40-49': 80570,
      '50-59': 74779,
      '60-69': 56984,
      '70-79': 31362,
      '≥80': 19658,
    },
    {
      name: 'FL',
      '<10': 2211012,
      '10-19': 2331102,
      '20-29': 2597830,
      '30-39': 2416176,
      '40-49': 2575576,
      '50-59': 2762983,
      '60-69': 2404659,
      '70-79': 1615547,
      '≥80': 1019566,
    },
    {
      name: 'GA',
      '<10': 1363631,
      '10-19': 1421557,
      '20-29': 1418696,
      '30-39': 1357210,
      '40-49': 1404698,
      '50-59': 1337985,
      '60-69': 998253,
      '70-79': 528108,
      '≥80': 269182,
    },
    {
      name: 'HI',
      '<10': 176484,
      '10-19': 163559,
      '20-29': 204336,
      '30-39': 187590,
      '40-49': 176904,
      '50-59': 188438,
      '60-69': 164957,
      '70-79': 85345,
      '≥80': 66060,
    },
    {
      name: 'ID',
      '<10': 236658,
      '10-19': 239509,
      '20-29': 218684,
      '30-39': 209500,
      '40-49': 194678,
      '50-59': 205170,
      '60-69': 179429,
      '70-79': 97621,
      '≥80': 54234,
    },
    {
      name: 'IL',
      '<10': 1619682,
      '10-19': 1715984,
      '20-29': 1789739,
      '30-39': 1721954,
      '40-49': 1697069,
      '50-59': 1773366,
      '60-69': 1326121,
      '70-79': 728821,
      '≥80': 478948,
    },
    {
      name: 'IN',
      '<10': 863029,
      '10-19': 905594,
      '20-29': 905590,
      '30-39': 827086,
      '40-49': 844059,
      '50-59': 911778,
      '60-69': 704523,
      '70-79': 384788,
      '≥80': 243131,
    },
    {
      name: 'IA',
      '<10': 401712,
      '10-19': 418667,
      '20-29': 419456,
      '30-39': 383638,
      '40-49': 370719,
      '50-59': 427554,
      '60-69': 344037,
      '70-79': 197223,
      '≥80': 143583,
    },
    {
      name: 'KS',
      '<10': 401751,
      '10-19': 402092,
      '20-29': 406956,
      '30-39': 368732,
      '40-49': 344427,
      '50-59': 389834,
      '60-69': 300759,
      '70-79': 166104,
      '≥80': 117637,
    },
    {
      name: 'KY',
      '<10': 555615,
      '10-19': 575866,
      '20-29': 593819,
      '30-39': 558201,
      '40-49': 580553,
      '50-59': 623164,
      '60-69': 495736,
      '70-79': 273961,
      '≥80': 155074,
    },
    {
      name: 'LA',
      '<10': 622061,
      '10-19': 613633,
      '20-29': 683606,
      '30-39': 615411,
      '40-49': 571991,
      '50-59': 631936,
      '60-69': 488846,
      '70-79': 266123,
      '≥80': 152063,
    },
    {
      name: 'ME',
      '<10': 137954,
      '10-19': 155774,
      '20-29': 156359,
      '30-39': 147695,
      '40-49': 176908,
      '50-59': 215787,
      '60-69': 179540,
      '70-79': 97899,
      '≥80': 62007,
    },
    {
      name: 'MD',
      '<10': 741952,
      '10-19': 764730,
      '20-29': 815346,
      '30-39': 784097,
      '40-49': 815875,
      '50-59': 862778,
      '60-69': 636309,
      '70-79': 330736,
      '≥80': 208079,
    },
    {
      name: 'MA',
      '<10': 737748,
      '10-19': 862371,
      '20-29': 971340,
      '30-39': 847306,
      '40-49': 916106,
      '50-59': 979128,
      '60-69': 737805,
      '70-79': 401931,
      '≥80': 288408,
    },
    {
      name: 'MI',
      '<10': 1181424,
      '10-19': 1324071,
      '20-29': 1338179,
      '30-39': 1162186,
      '40-49': 1283122,
      '50-59': 1454462,
      '60-69': 1148131,
      '70-79': 619722,
      '≥80': 398303,
    },
    {
      name: 'MN',
      '<10': 711604,
      '10-19': 714399,
      '20-29': 728222,
      '30-39': 715583,
      '40-49': 692201,
      '50-59': 782655,
      '60-69': 577313,
      '70-79': 312906,
      '≥80': 215985,
    },
    {
      name: 'MS',
      '<10': 400288,
      '10-19': 421329,
      '20-29': 414195,
      '30-39': 374724,
      '40-49': 377165,
      '50-59': 400164,
      '60-69': 319443,
      '70-79': 181195,
      '≥80': 100689,
    },
    {
      name: 'MO',
      '<10': 763948,
      '10-19': 792935,
      '20-29': 831725,
      '30-39': 763002,
      '40-49': 750989,
      '50-59': 857534,
      '60-69': 668878,
      '70-79': 388086,
      '≥80': 242554,
    },
    {
      name: 'MT',
      '<10': 126020,
      '10-19': 126294,
      '20-29': 136346,
      '30-39': 125004,
      '40-49': 116502,
      '50-59': 149800,
      '60-69': 130977,
      '70-79': 70528,
      '≥80': 41920,
    },
    {
      name: 'NE',
      '<10': 263518,
      '10-19': 257610,
      '20-29': 260646,
      '30-39': 244236,
      '40-49': 222479,
      '50-59': 250911,
      '60-69': 195705,
      '70-79': 107650,
      '≥80': 78504,
    },
    {
      name: 'NV',
      '<10': 369362,
      '10-19': 360263,
      '20-29': 392834,
      '30-39': 390261,
      '40-49': 387272,
      '50-59': 373757,
      '60-69': 309651,
      '70-79': 173499,
      '≥80': 82273,
    },
    {
      name: 'NH',
      '<10': 138762,
      '10-19': 167495,
      '20-29': 167554,
      '30-39': 151409,
      '40-49': 182703,
      '50-59': 217950,
      '60-69': 164287,
      '70-79': 84791,
      '≥80': 52552,
    },
    {
      name: 'NJ',
      '<10': 1079136,
      '10-19': 1153625,
      '20-29': 1139927,
      '30-39': 1143452,
      '40-49': 1254602,
      '50-59': 1307263,
      '60-69': 946399,
      '70-79': 523620,
      '≥80': 367432,
    },
    {
      name: 'NM',
      '<10': 276468,
      '10-19': 282662,
      '20-29': 289801,
      '30-39': 260579,
      '40-49': 244346,
      '50-59': 280363,
      '60-69': 239044,
      '70-79': 135013,
      '≥80': 74393,
    },
    {
      name: 'NY',
      '<10': 2319945,
      '10-19': 2445591,
      '20-29': 2894266,
      '30-39': 2605355,
      '40-49': 2617327,
      '50-59': 2755620,
      '60-69': 2095207,
      '70-79': 1160055,
      '≥80': 804091,
    },
    {
      name: 'NC',
      '<10': 1250298,
      '10-19': 1310398,
      '20-29': 1350242,
      '30-39': 1268976,
      '40-49': 1357746,
      '50-59': 1356117,
      '60-69': 1095320,
      '70-79': 609234,
      '≥80': 342497,
    },
    {
      name: 'ND',
      '<10': 99477,
      '10-19': 91069,
      '20-29': 124509,
      '30-39': 94713,
      '40-49': 80327,
      '50-59': 98688,
      '60-69': 73825,
      '70-79': 41348,
      '≥80': 32206,
    },
    {
      name: 'OH',
      '<10': 1422838,
      '10-19': 1530264,
      '20-29': 1535538,
      '30-39': 1398724,
      '40-49': 1490959,
      '50-59': 1677794,
      '60-69': 1320776,
      '70-79': 728158,
      '≥80': 481890,
    },
    {
      name: 'OK',
      '<10': 534481,
      '10-19': 522282,
      '20-29': 552528,
      '30-39': 501392,
      '40-49': 469410,
      '50-59': 512850,
      '60-69': 404704,
      '70-79': 239887,
      '≥80': 138055,
    },
    {
      name: 'OR',
      '<10': 474456,
      '10-19': 485345,
      '20-29': 538596,
      '30-39': 537767,
      '40-49': 507826,
      '50-59': 534421,
      '60-69': 490894,
      '70-79': 255809,
      '≥80': 157153,
    },
    {
      name: 'PA',
      '<10': 1458931,
      '10-19': 1608018,
      '20-29': 1712448,
      '30-39': 1520409,
      '40-49': 1645291,
      '50-59': 1881378,
      '60-69': 1491536,
      '70-79': 850897,
      '≥80': 615069,
    },
    {
      name: 'RI',
      '<10': 111377,
      '10-19': 136885,
      '20-29': 153674,
      '30-39': 126503,
      '40-49': 137892,
      '50-59': 156127,
      '60-69': 117653,
      '70-79': 63359,
      '≥80': 51021,
    },
    {
      name: 'SC',
      '<10': 599591,
      '10-19': 619144,
      '20-29': 667523,
      '30-39': 596491,
      '40-49': 619792,
      '50-59': 663408,
      '60-69': 579856,
      '70-79': 322073,
      '≥80': 166727,
    },
    {
      name: 'SD',
      '<10': 120366,
      '10-19': 113383,
      '20-29': 116748,
      '30-39': 105499,
      '40-49': 96288,
      '50-59': 117012,
      '60-69': 92824,
      '70-79': 50398,
      '≥80': 38540,
    },
    {
      name: 'TN',
      '<10': 818404,
      '10-19': 842873,
      '20-29': 895337,
      '30-39': 837313,
      '40-49': 866343,
      '50-59': 904272,
      '60-69': 741045,
      '70-79': 414939,
      '≥80': 227483,
    },
    {
      name: 'TX',
      '<10': 3983091,
      '10-19': 3910528,
      '20-29': 3946447,
      '30-39': 3770534,
      '40-49': 3545746,
      '50-59': 3344930,
      '60-69': 2431494,
      '70-79': 1291486,
      '≥80': 732179,
    },
    {
      name: 'UT',
      '<10': 513515,
      '10-19': 479126,
      '20-29': 465219,
      '30-39': 436010,
      '40-49': 328569,
      '50-59': 301596,
      '60-69': 230007,
      '70-79': 123674,
      '≥80': 70711,
    },
    {
      name: 'VT',
      '<10': 63768,
      '10-19': 79351,
      '20-29': 81765,
      '30-39': 70092,
      '40-49': 79982,
      '50-59': 99521,
      '60-69': 82136,
      '70-79': 42978,
      '≥80': 26656,
    },
    {
      name: 'VA',
      '<10': 1033629,
      '10-19': 1065461,
      '20-29': 1170634,
      '30-39': 1112111,
      '40-49': 1134928,
      '50-59': 1162028,
      '60-69': 881763,
      '70-79': 475141,
      '≥80': 274606,
    },
    {
      name: 'WA',
      '<10': 895790,
      '10-19': 882812,
      '20-29': 1004428,
      '30-39': 970613,
      '40-49': 921205,
      '50-59': 970407,
      '60-69': 784208,
      '70-79': 401094,
      '≥80': 242589,
    },
    {
      name: 'WV',
      '<10': 207017,
      '10-19': 218547,
      '20-29': 232027,
      '30-39': 220494,
      '40-49': 238218,
      '50-59': 269346,
      '60-69': 243108,
      '70-79': 138134,
      '≥80': 79201,
    },
    {
      name: 'WI',
      '<10': 705648,
      '10-19': 755224,
      '20-29': 760961,
      '30-39': 714479,
      '40-49': 732280,
      '50-59': 848672,
      '60-69': 645015,
      '70-79': 350772,
      '≥80': 241747,
    },
    {
      name: 'WY',
      '<10': 78217,
      '10-19': 75535,
      '20-29': 82898,
      '30-39': 76912,
      '40-49': 68464,
      '50-59': 81018,
      '60-69': 67484,
      '70-79': 32819,
      '≥80': 19682,
    },
    {
      name: 'PR',
      '<10': 389428,
      '10-19': 479749,
      '20-29': 480184,
      '30-39': 441842,
      '40-49': 456009,
      '50-59': 452503,
      '60-69': 411924,
      '70-79': 268783,
      '≥80': 148963,
    },
  ];

  private ages = [
    '<10',
    '10-19',
    '20-29',
    '30-39',
    '40-49',
    '50-59',
    '60-69',
    '70-79',
    '≥80',
  ];

  private stateages = [
    { state: 'AL', age: '<10', population: 598478 },
    { state: 'AK', age: '<10', population: 106741 },
    { state: 'AZ', age: '<10', population: 892083 },
    { state: 'AR', age: '<10', population: 392177 },
    { state: 'CA', age: '<10', population: 5038433 },
    { state: 'CO', age: '<10', population: 690830 },
    { state: 'CT', age: '<10', population: 399369 },
    { state: 'DE', age: '<10', population: 112177 },
    { state: 'DC', age: '<10', population: 74377 },
    { state: 'FL', age: '<10', population: 2211012 },
    { state: 'GA', age: '<10', population: 1363631 },
    { state: 'HI', age: '<10', population: 176484 },
    { state: 'ID', age: '<10', population: 236658 },
    { state: 'IL', age: '<10', population: 1619682 },
    { state: 'IN', age: '<10', population: 863029 },
    { state: 'IA', age: '<10', population: 401712 },
    { state: 'KS', age: '<10', population: 401751 },
    { state: 'KY', age: '<10', population: 555615 },
    { state: 'LA', age: '<10', population: 622061 },
    { state: 'ME', age: '<10', population: 137954 },
    { state: 'MD', age: '<10', population: 741952 },
    { state: 'MA', age: '<10', population: 737748 },
    { state: 'MI', age: '<10', population: 1181424 },
    { state: 'MN', age: '<10', population: 711604 },
    { state: 'MS', age: '<10', population: 400288 },
    { state: 'MO', age: '<10', population: 763948 },
    { state: 'MT', age: '<10', population: 126020 },
    { state: 'NE', age: '<10', population: 263518 },
    { state: 'NV', age: '<10', population: 369362 },
    { state: 'NH', age: '<10', population: 138762 },
    { state: 'NJ', age: '<10', population: 1079136 },
    { state: 'NM', age: '<10', population: 276468 },
    { state: 'NY', age: '<10', population: 2319945 },
    { state: 'NC', age: '<10', population: 1250298 },
    { state: 'ND', age: '<10', population: 99477 },
    { state: 'OH', age: '<10', population: 1422838 },
    { state: 'OK', age: '<10', population: 534481 },
    { state: 'OR', age: '<10', population: 474456 },
    { state: 'PA', age: '<10', population: 1458931 },
    { state: 'RI', age: '<10', population: 111377 },
    { state: 'SC', age: '<10', population: 599591 },
    { state: 'SD', age: '<10', population: 120366 },
    { state: 'TN', age: '<10', population: 818404 },
    { state: 'TX', age: '<10', population: 3983091 },
    { state: 'UT', age: '<10', population: 513515 },
    { state: 'VT', age: '<10', population: 63768 },
    { state: 'VA', age: '<10', population: 1033629 },
    { state: 'WA', age: '<10', population: 895790 },
    { state: 'WV', age: '<10', population: 207017 },
    { state: 'WI', age: '<10', population: 705648 },
    { state: 'WY', age: '<10', population: 78217 },
    { state: 'PR', age: '<10', population: 389428 },
    { state: 'AL', age: '10-19', population: 638789 },
    { state: 'AK', age: '10-19', population: 99926 },
    { state: 'AZ', age: '10-19', population: 912735 },
    { state: 'AR', age: '10-19', population: 397185 },
    { state: 'CA', age: '10-19', population: 5170341 },
    { state: 'CO', age: '10-19', population: 697447 },
    { state: 'CT', age: '10-19', population: 481065 },
    { state: 'DE', age: '10-19', population: 117854 },
    { state: 'DC', age: '10-19', population: 62783 },
    { state: 'FL', age: '10-19', population: 2331102 },
    { state: 'GA', age: '10-19', population: 1421557 },
    { state: 'HI', age: '10-19', population: 163559 },
    { state: 'ID', age: '10-19', population: 239509 },
    { state: 'IL', age: '10-19', population: 1715984 },
    { state: 'IN', age: '10-19', population: 905594 },
    { state: 'IA', age: '10-19', population: 418667 },
    { state: 'KS', age: '10-19', population: 402092 },
    { state: 'KY', age: '10-19', population: 575866 },
    { state: 'LA', age: '10-19', population: 613633 },
    { state: 'ME', age: '10-19', population: 155774 },
    { state: 'MD', age: '10-19', population: 764730 },
    { state: 'MA', age: '10-19', population: 862371 },
    { state: 'MI', age: '10-19', population: 1324071 },
    { state: 'MN', age: '10-19', population: 714399 },
    { state: 'MS', age: '10-19', population: 421329 },
    { state: 'MO', age: '10-19', population: 792935 },
    { state: 'MT', age: '10-19', population: 126294 },
    { state: 'NE', age: '10-19', population: 257610 },
    { state: 'NV', age: '10-19', population: 360263 },
    { state: 'NH', age: '10-19', population: 167495 },
    { state: 'NJ', age: '10-19', population: 1153625 },
    { state: 'NM', age: '10-19', population: 282662 },
    { state: 'NY', age: '10-19', population: 2445591 },
    { state: 'NC', age: '10-19', population: 1310398 },
    { state: 'ND', age: '10-19', population: 91069 },
    { state: 'OH', age: '10-19', population: 1530264 },
    { state: 'OK', age: '10-19', population: 522282 },
    { state: 'OR', age: '10-19', population: 485345 },
    { state: 'PA', age: '10-19', population: 1608018 },
    { state: 'RI', age: '10-19', population: 136885 },
    { state: 'SC', age: '10-19', population: 619144 },
    { state: 'SD', age: '10-19', population: 113383 },
    { state: 'TN', age: '10-19', population: 842873 },
    { state: 'TX', age: '10-19', population: 3910528 },
    { state: 'UT', age: '10-19', population: 479126 },
    { state: 'VT', age: '10-19', population: 79351 },
    { state: 'VA', age: '10-19', population: 1065461 },
    { state: 'WA', age: '10-19', population: 882812 },
    { state: 'WV', age: '10-19', population: 218547 },
    { state: 'WI', age: '10-19', population: 755224 },
    { state: 'WY', age: '10-19', population: 75535 },
    { state: 'PR', age: '10-19', population: 479749 },
    { state: 'AL', age: '20-29', population: 661666 },
    { state: 'AK', age: '20-29', population: 120674 },
    { state: 'AZ', age: '20-29', population: 939804 },
    { state: 'AR', age: '20-29', population: 399698 },
    { state: 'CA', age: '20-29', population: 5809455 },
    { state: 'CO', age: '20-29', population: 780508 },
    { state: 'CT', age: '20-29', population: 462323 },
    { state: 'DE', age: '20-29', population: 127554 },
    { state: 'DC', age: '20-29', population: 136976 },
    { state: 'FL', age: '20-29', population: 2597830 },
    { state: 'GA', age: '20-29', population: 1418696 },
    { state: 'HI', age: '20-29', population: 204336 },
    { state: 'ID', age: '20-29', population: 218684 },
    { state: 'IL', age: '20-29', population: 1789739 },
    { state: 'IN', age: '20-29', population: 905590 },
    { state: 'IA', age: '20-29', population: 419456 },
    { state: 'KS', age: '20-29', population: 406956 },
    { state: 'KY', age: '20-29', population: 593819 },
    { state: 'LA', age: '20-29', population: 683606 },
    { state: 'ME', age: '20-29', population: 156359 },
    { state: 'MD', age: '20-29', population: 815346 },
    { state: 'MA', age: '20-29', population: 971340 },
    { state: 'MI', age: '20-29', population: 1338179 },
    { state: 'MN', age: '20-29', population: 728222 },
    { state: 'MS', age: '20-29', population: 414195 },
    { state: 'MO', age: '20-29', population: 831725 },
    { state: 'MT', age: '20-29', population: 136346 },
    { state: 'NE', age: '20-29', population: 260646 },
    { state: 'NV', age: '20-29', population: 392834 },
    { state: 'NH', age: '20-29', population: 167554 },
    { state: 'NJ', age: '20-29', population: 1139927 },
    { state: 'NM', age: '20-29', population: 289801 },
    { state: 'NY', age: '20-29', population: 2894266 },
    { state: 'NC', age: '20-29', population: 1350242 },
    { state: 'ND', age: '20-29', population: 124509 },
    { state: 'OH', age: '20-29', population: 1535538 },
    { state: 'OK', age: '20-29', population: 552528 },
    { state: 'OR', age: '20-29', population: 538596 },
    { state: 'PA', age: '20-29', population: 1712448 },
    { state: 'RI', age: '20-29', population: 153674 },
    { state: 'SC', age: '20-29', population: 667523 },
    { state: 'SD', age: '20-29', population: 116748 },
    { state: 'TN', age: '20-29', population: 895337 },
    { state: 'TX', age: '20-29', population: 3946447 },
    { state: 'UT', age: '20-29', population: 465219 },
    { state: 'VT', age: '20-29', population: 81765 },
    { state: 'VA', age: '20-29', population: 1170634 },
    { state: 'WA', age: '20-29', population: 1004428 },
    { state: 'WV', age: '20-29', population: 232027 },
    { state: 'WI', age: '20-29', population: 760961 },
    { state: 'WY', age: '20-29', population: 82898 },
    { state: 'PR', age: '20-29', population: 480184 },
    { state: 'AL', age: '30-39', population: 603013 },
    { state: 'AK', age: '30-39', population: 102008 },
    { state: 'AZ', age: '30-39', population: 857054 },
    { state: 'AR', age: '30-39', population: 372998 },
    { state: 'CA', age: '30-39', population: 5354112 },
    { state: 'CO', age: '30-39', population: 766382 },
    { state: 'CT', age: '30-39', population: 424890 },
    { state: 'DE', age: '30-39', population: 114063 },
    { state: 'DC', age: '30-39', population: 121520 },
    { state: 'FL', age: '30-39', population: 2416176 },
    { state: 'GA', age: '30-39', population: 1357210 },
    { state: 'HI', age: '30-39', population: 187590 },
    { state: 'ID', age: '30-39', population: 209500 },
    { state: 'IL', age: '30-39', population: 1721954 },
    { state: 'IN', age: '30-39', population: 827086 },
    { state: 'IA', age: '30-39', population: 383638 },
    { state: 'KS', age: '30-39', population: 368732 },
    { state: 'KY', age: '30-39', population: 558201 },
    { state: 'LA', age: '30-39', population: 615411 },
    { state: 'ME', age: '30-39', population: 147695 },
    { state: 'MD', age: '30-39', population: 784097 },
    { state: 'MA', age: '30-39', population: 847306 },
    { state: 'MI', age: '30-39', population: 1162186 },
    { state: 'MN', age: '30-39', population: 715583 },
    { state: 'MS', age: '30-39', population: 374724 },
    { state: 'MO', age: '30-39', population: 763002 },
    { state: 'MT', age: '30-39', population: 125004 },
    { state: 'NE', age: '30-39', population: 244236 },
    { state: 'NV', age: '30-39', population: 390261 },
    { state: 'NH', age: '30-39', population: 151409 },
    { state: 'NJ', age: '30-39', population: 1143452 },
    { state: 'NM', age: '30-39', population: 260579 },
    { state: 'NY', age: '30-39', population: 2605355 },
    { state: 'NC', age: '30-39', population: 1268976 },
    { state: 'ND', age: '30-39', population: 94713 },
    { state: 'OH', age: '30-39', population: 1398724 },
    { state: 'OK', age: '30-39', population: 501392 },
    { state: 'OR', age: '30-39', population: 537767 },
    { state: 'PA', age: '30-39', population: 1520409 },
    { state: 'RI', age: '30-39', population: 126503 },
    { state: 'SC', age: '30-39', population: 596491 },
    { state: 'SD', age: '30-39', population: 105499 },
    { state: 'TN', age: '30-39', population: 837313 },
    { state: 'TX', age: '30-39', population: 3770534 },
    { state: 'UT', age: '30-39', population: 436010 },
    { state: 'VT', age: '30-39', population: 70092 },
    { state: 'VA', age: '30-39', population: 1112111 },
    { state: 'WA', age: '30-39', population: 970613 },
    { state: 'WV', age: '30-39', population: 220494 },
    { state: 'WI', age: '30-39', population: 714479 },
    { state: 'WY', age: '30-39', population: 76912 },
    { state: 'PR', age: '30-39', population: 441842 },
    { state: 'AL', age: '40-49', population: 625599 },
    { state: 'AK', age: '40-49', population: 91539 },
    { state: 'AZ', age: '40-49', population: 833290 },
    { state: 'AR', age: '40-49', population: 370157 },
    { state: 'CA', age: '40-49', population: 5179258 },
    { state: 'CO', age: '40-49', population: 705450 },
    { state: 'CT', age: '40-49', population: 496265 },
    { state: 'DE', age: '40-49', population: 117588 },
    { state: 'DC', age: '40-49', population: 80570 },
    { state: 'FL', age: '40-49', population: 2575576 },
    { state: 'GA', age: '40-49', population: 1404698 },
    { state: 'HI', age: '40-49', population: 176904 },
    { state: 'ID', age: '40-49', population: 194678 },
    { state: 'IL', age: '40-49', population: 1697069 },
    { state: 'IN', age: '40-49', population: 844059 },
    { state: 'IA', age: '40-49', population: 370719 },
    { state: 'KS', age: '40-49', population: 344427 },
    { state: 'KY', age: '40-49', population: 580553 },
    { state: 'LA', age: '40-49', population: 571991 },
    { state: 'ME', age: '40-49', population: 176908 },
    { state: 'MD', age: '40-49', population: 815875 },
    { state: 'MA', age: '40-49', population: 916106 },
    { state: 'MI', age: '40-49', population: 1283122 },
    { state: 'MN', age: '40-49', population: 692201 },
    { state: 'MS', age: '40-49', population: 377165 },
    { state: 'MO', age: '40-49', population: 750989 },
    { state: 'MT', age: '40-49', population: 116502 },
    { state: 'NE', age: '40-49', population: 222479 },
    { state: 'NV', age: '40-49', population: 387272 },
    { state: 'NH', age: '40-49', population: 182703 },
    { state: 'NJ', age: '40-49', population: 1254602 },
    { state: 'NM', age: '40-49', population: 244346 },
    { state: 'NY', age: '40-49', population: 2617327 },
    { state: 'NC', age: '40-49', population: 1357746 },
    { state: 'ND', age: '40-49', population: 80327 },
    { state: 'OH', age: '40-49', population: 1490959 },
    { state: 'OK', age: '40-49', population: 469410 },
    { state: 'OR', age: '40-49', population: 507826 },
    { state: 'PA', age: '40-49', population: 1645291 },
    { state: 'RI', age: '40-49', population: 137892 },
    { state: 'SC', age: '40-49', population: 619792 },
    { state: 'SD', age: '40-49', population: 96288 },
    { state: 'TN', age: '40-49', population: 866343 },
    { state: 'TX', age: '40-49', population: 3545746 },
    { state: 'UT', age: '40-49', population: 328569 },
    { state: 'VT', age: '40-49', population: 79982 },
    { state: 'VA', age: '40-49', population: 1134928 },
    { state: 'WA', age: '40-49', population: 921205 },
    { state: 'WV', age: '40-49', population: 238218 },
    { state: 'WI', age: '40-49', population: 732280 },
    { state: 'WY', age: '40-49', population: 68464 },
    { state: 'PR', age: '40-49', population: 456009 },
    { state: 'AL', age: '50-59', population: 673864 },
    { state: 'AK', age: '50-59', population: 104569 },
    { state: 'AZ', age: '50-59', population: 834858 },
    { state: 'AR', age: '50-59', population: 395070 },
    { state: 'CA', age: '50-59', population: 5042094 },
    { state: 'CO', age: '50-59', population: 725661 },
    { state: 'CT', age: '50-59', population: 546361 },
    { state: 'DE', age: '50-59', population: 133331 },
    { state: 'DC', age: '50-59', population: 74779 },
    { state: 'FL', age: '50-59', population: 2762983 },
    { state: 'GA', age: '50-59', population: 1337985 },
    { state: 'HI', age: '50-59', population: 188438 },
    { state: 'ID', age: '50-59', population: 205170 },
    { state: 'IL', age: '50-59', population: 1773366 },
    { state: 'IN', age: '50-59', population: 911778 },
    { state: 'IA', age: '50-59', population: 427554 },
    { state: 'KS', age: '50-59', population: 389834 },
    { state: 'KY', age: '50-59', population: 623164 },
    { state: 'LA', age: '50-59', population: 631936 },
    { state: 'ME', age: '50-59', population: 215787 },
    { state: 'MD', age: '50-59', population: 862778 },
    { state: 'MA', age: '50-59', population: 979128 },
    { state: 'MI', age: '50-59', population: 1454462 },
    { state: 'MN', age: '50-59', population: 782655 },
    { state: 'MS', age: '50-59', population: 400164 },
    { state: 'MO', age: '50-59', population: 857534 },
    { state: 'MT', age: '50-59', population: 149800 },
    { state: 'NE', age: '50-59', population: 250911 },
    { state: 'NV', age: '50-59', population: 373757 },
    { state: 'NH', age: '50-59', population: 217950 },
    { state: 'NJ', age: '50-59', population: 1307263 },
    { state: 'NM', age: '50-59', population: 280363 },
    { state: 'NY', age: '50-59', population: 2755620 },
    { state: 'NC', age: '50-59', population: 1356117 },
    { state: 'ND', age: '50-59', population: 98688 },
    { state: 'OH', age: '50-59', population: 1677794 },
    { state: 'OK', age: '50-59', population: 512850 },
    { state: 'OR', age: '50-59', population: 534421 },
    { state: 'PA', age: '50-59', population: 1881378 },
    { state: 'RI', age: '50-59', population: 156127 },
    { state: 'SC', age: '50-59', population: 663408 },
    { state: 'SD', age: '50-59', population: 117012 },
    { state: 'TN', age: '50-59', population: 904272 },
    { state: 'TX', age: '50-59', population: 3344930 },
    { state: 'UT', age: '50-59', population: 301596 },
    { state: 'VT', age: '50-59', population: 99521 },
    { state: 'VA', age: '50-59', population: 1162028 },
    { state: 'WA', age: '50-59', population: 970407 },
    { state: 'WV', age: '50-59', population: 269346 },
    { state: 'WI', age: '50-59', population: 848672 },
    { state: 'WY', age: '50-59', population: 81018 },
    { state: 'PR', age: '50-59', population: 452503 },
    { state: 'AL', age: '60-69', population: 548376 },
    { state: 'AK', age: '60-69', population: 70473 },
    { state: 'AZ', age: '60-69', population: 737884 },
    { state: 'AR', age: '60-69', population: 329734 },
    { state: 'CA', age: '60-69', population: 3737461 },
    { state: 'CO', age: '60-69', population: 563376 },
    { state: 'CT', age: '60-69', population: 400995 },
    { state: 'DE', age: '60-69', population: 110822 },
    { state: 'DC', age: '60-69', population: 56984 },
    { state: 'FL', age: '60-69', population: 2404659 },
    { state: 'GA', age: '60-69', population: 998253 },
    { state: 'HI', age: '60-69', population: 164957 },
    { state: 'ID', age: '60-69', population: 179429 },
    { state: 'IL', age: '60-69', population: 1326121 },
    { state: 'IN', age: '60-69', population: 704523 },
    { state: 'IA', age: '60-69', population: 344037 },
    { state: 'KS', age: '60-69', population: 300759 },
    { state: 'KY', age: '60-69', population: 495736 },
    { state: 'LA', age: '60-69', population: 488846 },
    { state: 'ME', age: '60-69', population: 179540 },
    { state: 'MD', age: '60-69', population: 636309 },
    { state: 'MA', age: '60-69', population: 737805 },
    { state: 'MI', age: '60-69', population: 1148131 },
    { state: 'MN', age: '60-69', population: 577313 },
    { state: 'MS', age: '60-69', population: 319443 },
    { state: 'MO', age: '60-69', population: 668878 },
    { state: 'MT', age: '60-69', population: 130977 },
    { state: 'NE', age: '60-69', population: 195705 },
    { state: 'NV', age: '60-69', population: 309651 },
    { state: 'NH', age: '60-69', population: 164287 },
    { state: 'NJ', age: '60-69', population: 946399 },
    { state: 'NM', age: '60-69', population: 239044 },
    { state: 'NY', age: '60-69', population: 2095207 },
    { state: 'NC', age: '60-69', population: 1095320 },
    { state: 'ND', age: '60-69', population: 73825 },
    { state: 'OH', age: '60-69', population: 1320776 },
    { state: 'OK', age: '60-69', population: 404704 },
    { state: 'OR', age: '60-69', population: 490894 },
    { state: 'PA', age: '60-69', population: 1491536 },
    { state: 'RI', age: '60-69', population: 117653 },
    { state: 'SC', age: '60-69', population: 579856 },
    { state: 'SD', age: '60-69', population: 92824 },
    { state: 'TN', age: '60-69', population: 741045 },
    { state: 'TX', age: '60-69', population: 2431494 },
    { state: 'UT', age: '60-69', population: 230007 },
    { state: 'VT', age: '60-69', population: 82136 },
    { state: 'VA', age: '60-69', population: 881763 },
    { state: 'WA', age: '60-69', population: 784208 },
    { state: 'WV', age: '60-69', population: 243108 },
    { state: 'WI', age: '60-69', population: 645015 },
  ];

  data = data;
  // private data = [
  //   {"Framework": "Vue", "Stars": "166443", "Released": "2014"},
  //   {"Framework": "React", "Stars": "150793", "Released": "2013"},
  //   {"Framework": "Angular", "Stars": "62342", "Released": "2016"},
  //   {"Framework": "Backbone", "Stars": "27647", "Released": "2010"},
  //   {"Framework": "Ember", "Stars": "21471", "Released": "2011"},
  // ];
  private svg: any;
  private margin = 50;
  private width = 750 - this.margin * 2;
  private height = 400 - this.margin * 2;

    private createSvg(): void {
      this.svg = d3.select("figure#bar")
      .append("svg")
      .attr("width", this.width + (this.margin * 2))
      .attr("height", this.height + (this.margin * 2))
      .append("g")
      .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
  }

  private drawBars(data: any[]): void {
    // Create the X-axis band scale
    const x = d3.scaleBand()
    .range([0, this.width])
    .domain(data.map(d => d.Framework))
    .padding(0.2);

    // Draw the X-axis on the DOM
    this.svg.append("g")
    .attr("transform", "translate(0," + this.height + ")")
    .call(d3.axisBottom(x))
    .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end");
   
   
    // Create the X-axis band scale
    const z = d3.scaleBand()
    .range([0, this.width])
    .domain(data.map(d => d.Stars))
    .padding(0.2);

    // Draw the X-axis on the DOM
    this.svg.append("g")
    .attr("transform", "translate(0," + this.height + ")")
    .call(d3.axisTop(z))
    .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end");

    // Create the Y-axis band scale
    const y = d3.scaleLinear()
    .domain([0, 200000])
    .range([this.height, 0]);

    // Draw the Y-axis on the DOM
    this.svg.append("g")
    .call(d3.axisLeft(y));

    

    // Create and fill the bars
    this.svg.selectAll("bars")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", (d:any) => x(d.Framework))
    .attr("y", (d:any) => y(d.Stars))
    .attr("z", (d:any) => z(d.Released))
    .attr("width", x.bandwidth())
    .attr("height", (d:any) => this.height - y(d.Stars))
    .attr("fill", "#b2d7a2");
  }
  // Copyright 2021 Observable, Inc.
  // Released under the ISC license.
  // https://observablehq.com/@d3/bar-chart

  constructor() {}

  ngOnInit(): void {
    this.createSvg();
    this.drawBars(this.data);
    // this.barChart(this.data, {
    //   x: (d:any) => d.letter,
    //   y: (d:any) => d.frequency,
    //   title: "BAR CHART",
    //   // xDomain: d3.groupSort(this.data, ([d]) => d.frequency, d => d.letter),
    //   // yDomain: d3.groupSort(this.data, ([d]) => d.frequency, d => d.letter),
    //   yFormat: "%",
    //   // yLabel: "Frequency",
     
    //   color: "steelblue"
    // });
  }
}












  // barChart(
  //   data: any[],
  //   {
  //     x = (d: any, i: any) => i, // given d in data, returns the (ordinal) x-value
  //     y = (d: any) => d, // given d in data, returns the (quantitative) y-value
  //     title, // given d in data, returns the title text
      
  //     // xDomain, // an array of (ordinal) x-values
  //     xRange = [marginLeft, width - marginRight], // [left, right]
  //     yType = d3.scaleLinear, // y-scale type
  //     // yDomain, // [ymin, ymax]
  //     yRange = [height - marginBottom, marginTop], // [bottom, top]
  //     xPadding = 0.1, // amount of x-range to reserve to separate bars
  //     yFormat = "%", // a format specifier string for the y-axis
  //     // yLabel, // a label for the y-axis
  //     color = 'currentColor', // bar fill color
  //   } = {}
  // ) {
  //   // Compute values.
  //   const X = d3.map(data, x);
  //   const Y = d3.map(data, y);

  //   // Compute default domains, and unique the x-domain.
  //   if (xDomain === undefined) xDomain = X;
  //   if (yDomain === undefined) yDomain = [0, d3.max(Y)];
  //   xDomain = new d3.InternSet(xDomain);

  //   // Omit any data not present in the x-domain.
  //   const I = d3.range(X.length).filter((i) => xDomain.has(X[i]));

  //   // Construct scales, axes, and formats.
  //   const xScale = d3.scaleBand(xDomain, xRange).padding(xPadding);
  //   const yScale = yType(yDomain, yRange);
  //   // const xAxis = d3.axisBottom(xScale).tickSizeOuter(0);
  //   const yAxis = d3.axisLeft(yScale).ticks(height / 40, yFormat);

  //   // Compute titles.
  //   if (title === undefined) {
  //     const formatValue = yScale.tickFormat(100, yFormat);
  //     title = (i:any) => `${X[i]}\n${formatValue(Y[i])}`;
  //   } else {
  //     const O = d3.map(data, (d) => d);
  //     const T = title;
  //     title = (i:any) => T(O[i], i, data);
  //   }

  //   const svg = d3
  //     .create('svg')
  //     .attr('width', width)
  //     .attr('height', height)
  //     .attr('viewBox', [0, 0, width, height])
  //     .attr('style', 'max-width: 100%; height: auto; height: intrinsic;');

  //   svg
  //     .append('g')
  //     .attr('transform', `translate(${marginLeft},0)`)
  //     .call(yAxis)
  //     .call((g) => g.select('.domain').remove())
  //     .call((g) =>
  //       g
  //         .selectAll('.tick line')
  //         .clone()
  //         .attr('x2', width - marginLeft - marginRight)
  //         .attr('stroke-opacity', 0.1)
  //     )
  //     .call((g) =>
  //       g
  //         .append('text')
  //         .attr('x', -marginLeft)
  //         .attr('y', 10)
  //         .attr('fill', 'currentColor')
  //         .attr('text-anchor', 'start')
  //         .text(yLabel)
  //     );

  //   const bar = svg
  //     .append('g')
  //     .attr('fill', color)
  //     .selectAll('rect')
  //     .data(I)
  //     .join('rect')
  //     // .attr('x', (i) => xScale(X[i]))
  //     // .attr('y', (i) => yScale(Y[i]))
  //     .attr('height', (i) => yScale(0) - yScale(Y[i]))
  //     .attr('width', xScale.bandwidth());

  //   if (title) bar.append('title').text(title);

  //   svg
  //     .append('g')
  //     .attr('transform', `translate(0,${height - marginBottom})`)
  //     .call(xAxis);

  //   return svg.node();
  // }
