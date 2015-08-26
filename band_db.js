// JavaScript Document

function set_up_band_db(){
	//alert("DB");
	
	
		//Ronnie James Dio Stage = 0
		//second stage = 1
		//thrid stage = 2
		//fourth = 3
		//fifth = 4
		
		db.transaction(function (tx) {		
		
		tx.executeSql('DROP TABLE IF EXISTS bands');
		//tx.executeSql('DROP TABLE IF EXISTS bands_101');
		
		tx.executeSql('CREATE TABLE IF NOT EXISTS bands_101 (id UNIQUE, band_name TEXT, stage TEXT, day INTEGER, start_time INTEGER, finish_time INTEGER, band_fav INTEGER, stage_rank INTEGER, day_name)');
		
		//Friday
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (1, "Mariachi El Bronx", "Main Stage", 20150828, 1200, 1230, 0, 0, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (2, "Neck Deep", "Main Stage", 20150828, 1245, 1325, 0, 0, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (3, "Drenge", "Main Stage", 20150828, 1340, 1420, 0, 0, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (4, "Palma Violets", "Main Stage", 20150828, 1440, 1525, 0, 0, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (5, "Panic! At The Disco", "Main Stage", 20150828, 1545, 1635, 0, 0, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (6, "All Time Low", "Main Stage", 20150828, 1655, 1745, 0, 0, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (7, "Bastille", "Main Stage", 20150828, 1810, 1910, 0, 0, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (8, "Alt J", "Main Stage", 20150828, 1945, 2045, 0, 0, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (9, "Mumford & Sons", "Main Stage", 20150828, 2130, 2330, 0, 0, "Friday")');
//Saturday
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (10, "Babymetal", "Main Stage", 20150829, 1200, 1230, 0, 0, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (11, "Fidlar", "Main Stage", 20150829, 1245, 1315, 0, 0, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (12, "Marmozets", "Main Stage", 20150829, 1335, 1415, 0, 0, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (13, "Modestep", "Main Stage", 20150829, 1430, 1510, 0, 0, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (14, "Pierce The Veil", "Main Stage", 20150829, 1535, 1620, 0, 0, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (15, "Alexisonfire", "Main Stage", 20150829, 1645, 1735, 0, 0, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (16, "Royal Blood", "Main Stage", 20150829, 1810, 1900, 0, 0, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (17, "Bring Me The Horizon", "Main Stage", 20150829, 1940, 2040, 0, 0, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (18, "Metallica", "Main Stage", 20150829, 2130, 2330, 0, 0, "Saturday")');
//Sunday
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (19, "Feed The Rhino", "Main Stage", 20150830, 1200, 1230, 0, 0, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (20, "Lonely The Brave", "Main Stage", 20150830, 1245, 1325, 0, 0, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (21, "Against Me!", "Main Stage", 20150830, 1345, 1430, 0, 0, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (22, "The Gaslight Anthem", "Main Stage", 20150830, 1450, 1540, 0, 0, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (23, "The Cribs", "Main Stage", 20150830, 1600, 1650, 0, 0, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (24, "The Maccabees", "Main Stage", 20150830, 1710, 1800, 0, 0, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (25, "Jamie T", "Main Stage", 20150830, 1825, 1925, 0, 0, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (26, "Kendrick Lamar", "Main Stage", 20150830, 2000, 2110, 0, 0, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (27, "The Libertines", "Main Stage", 20150830, 2155, 2330, 0, 0, "Sunday")');

//Friday
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (28, "The Struts", "NME BBC Radio 1 Stage", 20150828, 1150, 1225, 0, 1, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (29, "The Districts", "NME BBC Radio 1 Stage", 20150828, 1240, 1315, 0, 1, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (30, "Echosmith", "NME BBC Radio 1 Stage", 20150828, 1335, 1410, 0, 1, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (31, "Parquet Courts", "NME BBC Radio 1 Stage", 20150828, 1425, 1500, 0, 1, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (32, "American Football", "NME BBC Radio 1 Stage", 20150828, 1520, 1555, 0, 1, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (33, "Don Broco", "NME BBC Radio 1 Stage", 20150828, 1615, 1655, 0, 1, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (34, "Swim Deep", "NME BBC Radio 1 Stage", 20150828, 1720, 1800, 0, 1, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (35, "Peace", "NME BBC Radio 1 Stage", 20150828, 1825, 1905, 0, 1, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (36, "Run The Jewels", "NME BBC Radio 1 Stage", 20150828, 1930, 2010, 0, 1, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (37, "Limp Bizkit", "NME BBC Radio 1 Stage", 20150828, 2040, 2140, 0, 1, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (38, "Knife Party", "NME BBC Radio 1 Stage", 20150828, 2210, 2325, 0, 1, "Friday")');
//Saturday
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (39, "Nothing But Thieves", "NME BBC Radio 1 Stage", 20150829, 1300, 1330, 0, 1, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (40, "Twin Peaks", "NME BBC Radio 1 Stage", 20150829, 1350, 1420, 0, 1, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (41, "Slaves", "NME BBC Radio 1 Stage", 20150829, 1440, 1510, 0, 1, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (42, "Spector", "NME BBC Radio 1 Stage", 20150829, 1530, 1600, 0, 1, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (43, "Circa Waves", "NME BBC Radio 1 Stage", 20150829, 1620, 1700, 0, 1, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (44, "Wolf Alice", "NME BBC Radio 1 Stage", 20150829, 1720, 1800, 0, 1, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (45, "Everything Everything", "NME BBC Radio 1 Stage", 20150829, 1830, 1910, 0, 1, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (46, "Catfish And The Bottlemen", "NME BBC Radio 1 Stage", 20150829, 1940, 2020, 0, 1, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (47, "Twin Atlantic", "NME BBC Radio 1 Stage", 20150829, 2050, 2150, 0, 1, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (48, "Rebel Sound", "NME BBC Radio 1 Stage", 20150829, 2230, 2330, 0, 1, "Saturday")');
//Sunday
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (49, "The Skints", "NME BBC Radio 1 Stage", 20150830, 1150, 1225, 0, 1, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (50, "Shura", "NME BBC Radio 1 Stage", 20150830, 1245, 1325, 0, 1, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (51, "Ghostpoet", "NME BBC Radio 1 Stage", 20150830, 1345, 1425, 0, 1, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (52, "Awolnation", "NME BBC Radio 1 Stage", 20150830, 1445, 1525, 0, 1, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (53, "Kwabs", "NME BBC Radio 1 Stage", 20150830, 1545, 1625, 0, 1, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (54, "Glass Animals", "NME BBC Radio 1 Stage", 20150830, 1655, 1740, 0, 1, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (55, "Jamie Xx", "NME BBC Radio 1 Stage", 20150830, 1800, 1850, 0, 1, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (56, "Years & Years", "NME BBC Radio 1 Stage", 20150830, 1915, 2000, 0, 1, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (57, "Gorgon City", "NME BBC Radio 1 Stage", 20150830, 2030, 2115, 0, 1, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (58, "Deadmau5", "NME BBC Radio 1 Stage", 20150830, 2200, 2330, 0, 1, "Sunday")');

//Friday
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (59, "Cardiknox", "Dance Stage", 20150828, 1120, 1145, 0, 2, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (60, "The Ramona Flowers", "Dance Stage", 20150828, 1200, 1225, 0, 2, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (61, "All We Are", "Dance Stage", 20150828, 1240, 1305, 0, 2, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (62, "Ferdinand Weber", "Dance Stage", 20150828, 1320, 1350, 0, 2, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (63, "Hayden James", "Dance Stage", 20150828, 1400, 1430, 0, 2, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (64, "Toyboy & Robin", "Dance Stage", 20150828, 1440, 1510, 0, 2, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (65, "My Nu Leng", "Dance Stage", 20150828, 1520, 1555, 0, 2, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (66, "Jacob Plant", "Dance Stage", 20150828, 1610, 1645, 0, 2, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (67, "Porter Robinson", "Dance Stage", 20150828, 1700, 1735, 0, 2, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (68, "Dillon Francis", "Dance Stage", 20150828, 1750, 1830, 0, 2, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (69, "Hannah Wants", "Dance Stage", 20150828, 1845, 1935, 0, 2, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (70, "Camo & Krooked", "Dance Stage", 20150828, 1950, 2050, 0, 2, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (71, "Wilkinson", "Dance Stage", 20150828, 2105, 2205, 0, 2, "Friday")');
//Saturday
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (72, "Riptide Movement", "Dance Stage", 20150829, 1200, 1230, 0, 2, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (73, "Ftse", "Dance Stage", 20150829, 1245, 1315, 0, 2, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (74, "Ben Khan", "Dance Stage", 20150829, 1330, 1400, 0, 2, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (75, "Elliphant", "Dance Stage", 20150829, 1415, 1445, 0, 2, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (76, "Dimension X Kove", "Dance Stage", 20150829, 1500, 1545, 0, 2, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (77, "Dj Fresh", "Dance Stage", 20150829, 1600, 1700, 0, 2, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (78, "Secondcity", "Dance Stage", 20150829, 1715, 1800, 0, 2, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (79, "Tourist", "Dance Stage", 20150829, 1815, 1900, 0, 2, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (80, "Charli Xcx", "Dance Stage", 20150829, 1915, 2000, 0, 2, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (81, "Oliver Dollar", "Dance Stage", 20150829, 2015, 2100, 0, 2, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (82, "Mk", "Dance Stage", 20150829, 2115, 2215, 0, 2, "Saturday")');
//Sunday
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (83, "The Six", "Dance Stage", 20150830, 1200, 1230, 0, 2, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (84, "Petite Meller", "Dance Stage", 20150830, 1245, 1315, 0, 2, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (85, "99 Souls", "Dance Stage", 20150830, 1330, 1400, 0, 2, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (86, "Tcts", "Dance Stage", 20150830, 1415, 1445, 0, 2, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (87, "Snakehips", "Dance Stage", 20150830, 1500, 1535, 0, 2, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (88, "Maribou State Live", "Dance Stage", 20150830, 1550, 1625, 0, 2, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (89, "Evan Christ", "Dance Stage", 20150830, 1640, 1715, 0, 2, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (90, "Rustie", "Dance Stage", 20150830, 1730, 1810, 0, 2, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (91, "Blonde Live", "Dance Stage", 20150830, 1825, 1915, 0, 2, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (92, "Brodinski", "Dance Stage", 20150830, 1930, 2030, 0, 2, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (93, "Hudson Mohawke", "Dance Stage", 20150830, 2045, 2145, 0, 2, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (94, "Boy Better Know", "Dance Stage", 20150830, 2200, 2300, 0, 2, "Sunday")');

//Friday
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (95, "Calls Landing", "The Pit / Lock Up Stage", 20150828, 1130, 1150, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (96, "Youth Man", "The Pit / Lock Up Stage", 20150828, 1205, 1230, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (97, "Vant", "The Pit / Lock Up Stage", 20150828, 1245, 1315, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (98, "God Damn", "The Pit / Lock Up Stage", 20150828, 1330, 1400, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (99, "The Bots", "The Pit / Lock Up Stage", 20150828, 1415, 1445, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (100, "Skinny Lister", "The Pit / Lock Up Stage", 20150828, 1500, 1530, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (101, "The Smith Street Band", "The Pit / Lock Up Stage", 20150828, 1545, 1620, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (102, "The Menzingers", "The Pit / Lock Up Stage", 20150828, 1725, 1800, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (103, "Bo Ningen", "The Pit / Lock Up Stage", 20150828, 1815, 1850, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (104, "Modern Life Is War", "The Pit / Lock Up Stage", 20150828, 1910, 1945, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (105, "The Bronx", "The Pit / Lock Up Stage", 20150828, 2010, 2055, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (106, "Simple Plan", "The Pit / Lock Up Stage", 20150828, 2125, 2210, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (107, "New Found Glory", "The Pit / Lock Up Stage", 20150828, 2240, 2330, 0, 3, "Friday")');
//Saturday
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (108, "Ltnt", "The Pit / Lock Up Stage", 20150829, 1130, 1150, 0, 3, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (109, "The One Hundred", "The Pit / Lock Up Stage", 20150829, 1205, 1230, 0, 3, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (110, "Ho9909", "The Pit / Lock Up Stage", 20150829, 1245, 1315, 0, 3, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (111, "Black Peaks", "The Pit / Lock Up Stage", 20150829, 1330, 1400, 0, 3, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (112, "No Devotion", "The Pit / Lock Up Stage", 20150829, 1415, 1445, 0, 3, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (113, "As It Is", "The Pit / Lock Up Stage", 20150829, 1500, 1535, 0, 3, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (114, "And So I Watch You From Afar", "The Pit / Lock Up Stage", 20150829, 1550, 1620, 0, 3, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (115, "Baroness", "The Pit / Lock Up Stage", 20150829, 1635, 1710, 0, 3, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (116, "Pvris", "The Pit / Lock Up Stage", 20150829, 1725, 1800, 0, 3, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (117, "Atreyu", "The Pit / Lock Up Stage", 20150829, 1815, 1850, 0, 3, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (118, "Gojira", "The Pit / Lock Up Stage", 20150829, 1910, 1955, 0, 3, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (119, "Ghost", "The Pit / Lock Up Stage", 20150829, 2025, 2115, 0, 3, "Saturday")');
//Sunday
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (120, "Black Foxxes", "The Pit / Lock Up Stage", 20150830, 1130, 1150, 0, 3, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (121, "Fort Hope", "The Pit / Lock Up Stage", 20150830, 1205, 1230, 0, 3, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (122, "Single Mothers", "The Pit / Lock Up Stage", 20150830, 1245, 1315, 0, 3, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (123, "Hawk Eyes", "The Pit / Lock Up Stage", 20150830, 1330, 1400, 0, 3, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (124, "Queen Kwong", "The Pit / Lock Up Stage", 20150830, 1415, 1445, 0, 3, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (125, "Moose Blood", "The Pit / Lock Up Stage", 20150830, 1500, 1530, 0, 3, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (126, "Turbowolf", "The Pit / Lock Up Stage", 20150830, 1545, 1620, 0, 3, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (127, "Frank Carter & The Rattlesnakes", "The Pit / Lock Up Stage", 20150830, 1635, 1710, 0, 3, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (128, "Beartooth", "The Pit / Lock Up Stage", 20150830, 1725, 1800, 0, 3, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (129, "Bury Tomorrow", "The Pit / Lock Up Stage", 20150830, 1815, 1850, 0, 3, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (130, "Frnkiero And The Celebration", "The Pit / Lock Up Stage", 20150830, 1910, 1945, 0, 3, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (131, "Cancer Bats", "The Pit / Lock Up Stage", 20150830, 2010, 2055, 0, 3, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (132, "While She Sleeps", "The Pit / Lock Up Stage", 20150830, 2125, 2210, 0, 3, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (133, "Refused", "The Pit / Lock Up Stage", 20150830, 2240, 2330, 0, 3, "Sunday")');

//Friday
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (134, "The Bulletproof Bomb", "Festival Republic", 20150828, 1100, 1130, 0, 4, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (135, "Hunter & The Bear", "Festival Republic", 20150828, 1145, 1210, 0, 4, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (136, "Elle King", "Festival Republic", 20150828, 1225, 1250, 0, 4, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (137, "Sunset Sons", "Festival Republic", 20150828, 1305, 1335, 0, 4, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (138, "Jake Isaac", "Festival Republic", 20150828, 1350, 1420, 0, 4, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (139, "Eliza And The Bear", "Festival Republic", 20150828, 1435, 1505, 0, 4, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (140, "Misty Miller", "Festival Republic", 20150828, 1520, 1550, 0, 4, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (141, "Joywave", "Festival Republic", 20150828, 1605, 1635, 0, 4, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (142, "Vaullts", "Festival Republic", 20150828, 1650, 1725, 0, 4, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (143, "Bears Den", "Festival Republic", 20150828, 1740, 1820, 0, 4, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (144, "Prides", "Festival Republic", 20150828, 1835, 1915, 0, 4, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (145, "Alvvays", "Festival Republic", 20150828, 1930, 2010, 0, 4, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (146, "Saint Raymond", "Festival Republic", 20150828, 2030, 2105, 0, 4, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (147, "Django Django", "Festival Republic", 20150828, 2125, 2215, 0, 4, "Friday")');
//Saturday
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (148, "Hunck", "Festival Republic", 20150829, 1100, 1120, 0, 4, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (149, "Walking On Cars", "Festival Republic", 20150829, 1135, 1205, 0, 4, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (150, "San Fermin", "Festival Republic", 20150829, 1220, 1245, 0, 4, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (151, "Neon Waltz", "Festival Republic", 20150829, 1300, 1325, 0, 4, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (152, "Bad Breedin", "Festival Republic", 20150829, 1340, 1410, 0, 4, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (153, "Rat Boy", "Festival Republic", 20150829, 1425, 1455, 0, 4, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (154, "Blossoms", "Festival Republic", 20150829, 1510, 1540, 0, 4, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (155, "Dmas", "Festival Republic", 20150829, 1555, 1625, 0, 4, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (156, "Pretty Vicious", "Festival Republic", 20150829, 1645, 1715, 0, 4, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (157, "Radkey", "Festival Republic", 20150829, 1735, 1810, 0, 4, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (158, "Seether", "Festival Republic", 20150829, 1830, 1905, 0, 4, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (159, "Darlia", "Festival Republic", 20150829, 1925, 2000, 0, 4, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (160, "Ash", "Festival Republic", 20150829, 2020, 2100, 0, 4, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (161, "Lucy Rose", "Festival Republic", 20150829, 2130, 2210, 0, 4, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (162, "The Wombats", "Festival Republic", 20150829, 2240, 2330, 0, 4, "Saturday")');
//Sunday
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (163, "The Sherlocks", "Festival Republic", 20150830, 1115, 1140, 0, 4, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (164, "The Last Internationale", "Festival Republic", 20150830, 1155, 1225, 0, 4, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (165, "Black Honey", "Festival Republic", 20150830, 1240, 1310, 0, 4, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (166, "Sundara Karma", "Festival Republic", 20150830, 1325, 1355, 0, 4, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (167, "Hippo Campus", "Festival Republic", 20150830, 1410, 1440, 0, 4, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (168, "Spring King", "Festival Republic", 20150830, 1455, 1525, 0, 4, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (169, "Gengahr", "Festival Republic", 20150830, 1540, 1610, 0, 4, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (170, "Mini Mansions", "Festival Republic", 20150830, 1625, 1655, 0, 4, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (171, "Jack Garatt", "Festival Republic", 20150830, 1710, 1745, 0, 4, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (172, "Coasts", "Festival Republic", 20150830, 1800, 1840, 0, 4, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (173, "We Are The Ocean", "Festival Republic", 20150830, 1855, 1935, 0, 4, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (174, "Manchester Orchestra", "Festival Republic", 20150830, 1955, 2035, 0, 4, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (175, "Little Comets", "Festival Republic", 20150830, 2055, 2130, 0, 4, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (176, "Frank Turner", "Festival Republic", 20150830, 2155, 2245, 0, 4, "Sunday")');

//Friday
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (177, "Dj Target", "1Xtra Stage", 20150828, 1445, 1515, 0, 5, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (178, "Bugzy Malone", "1Xtra Stage", 20150828, 1535, 1605, 0, 5, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (179, "Siobhan Bell", "1Xtra Stage", 20150828, 1650, 1720, 0, 5, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (180, "Star.one W/ Ping Pong", "1Xtra Stage", 20150828, 1735, 1810, 0, 5, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (181, "Pell", "1Xtra Stage", 20150828, 1830, 1910, 0, 5, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (182, "Oneman", "1Xtra Stage", 20150828, 1930, 2015, 0, 5, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (183, "Rae Sremmurd", "1Xtra Stage", 20150828, 2030, 2115, 0, 5, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (184, "Flatbush Zombies", "1Xtra Stage", 20150828, 2130, 2215, 0, 5, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (185, "A$ap Ferg", "1Xtra Stage", 20150828, 2230, 2330, 0, 5, "Friday")');
//Saturday
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (186, "Remi Miles", "1Xtra Stage", 20150829, 1400, 1430, 0, 5, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (187, "Nick Brewer", "1Xtra Stage", 20150829, 1445, 1515, 0, 5, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (188, "Kiko Bun", "1Xtra Stage", 20150829, 1530, 1600, 0, 5, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (189, "Loyle Carner", "1Xtra Stage", 20150829, 1610, 1640, 0, 5, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (190, "Craze", "1Xtra Stage", 20150829, 1650, 1720, 0, 5, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (191, "Tempa T", "1Xtra Stage", 20150829, 1735, 1810, 0, 5, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (192, "Vince Staples", "1Xtra Stage", 20150829, 1830, 1910, 0, 5, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (193, "Ms Dynamite", "1Xtra Stage", 20150829, 1930, 2015, 0, 5, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (194, "Dj Semtex", "1Xtra Stage", 20150829, 2030, 2115, 0, 5, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (195, "Lethal Bizzle", "1Xtra Stage", 20150829, 2130, 2215, 0, 5, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (196, "Azealia Banks", "1Xtra Stage", 20150829, 2230, 2330, 0, 5, "Saturday")');
//Sunday
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (197, "Lady Leshurr", "1Xtra Stage", 20150830, 1535, 1605, 0, 5, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (198, "Isaiah Dreads", "1Xtra Stage", 20150830, 1650, 1720, 0, 5, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (199, "Ratking", "1Xtra Stage", 20150830, 1735, 1810, 0, 5, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (200, "Fekky", "1Xtra Stage", 20150830, 1830, 1910, 0, 5, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (201, "Dope D.o.d.", "1Xtra Stage", 20150830, 1930, 2015, 0, 5, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (202, "Young Thug", "1Xtra Stage", 20150830, 2030, 2115, 0, 5, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (203, "Stormzy", "1Xtra Stage", 20150830, 2130, 2215, 0, 5, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (204, "Krept & Konan", "1Xtra Stage", 20150830, 2230, 2330, 0, 5, "Sunday")');

//Friday
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (205, "Treason Kings", "BBC Introducing", 20150828, 1100, 1120, 0, 6, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (206, "The Mallrats", "BBC Introducing", 20150828, 1140, 1200, 0, 6, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (207, "Otherkin", "BBC Introducing", 20150828, 1220, 1240, 0, 6, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (208, "Return To Rome", "BBC Introducing", 20150828, 1300, 1320, 0, 6, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (209, "Life", "BBC Introducing", 20150828, 1340, 1400, 0, 6, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (210, "Moon Tourists", "BBC Introducing", 20150828, 1420, 1440, 0, 6, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (211, "Martin Luke Brown", "BBC Introducing", 20150828, 1500, 1520, 0, 6, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (212, "The Amazons", "BBC Introducing", 20150828, 1630, 1700, 0, 6, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (213, "The Jacques", "BBC Introducing", 20150828, 1720, 1750, 0, 6, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (214, "Viola Beach", "BBC Introducing", 20150828, 1810, 1840, 0, 6, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (215, "Georgia", "BBC Introducing", 20150828, 1900, 1940, 0, 6, "Friday")');
//Saturday
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (216, "Happy Daggers", "BBC Introducing", 20150829, 1130, 1150, 0, 6, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (217, "Samuel S. Parkes", "BBC Introducing", 20150829, 1210, 1230, 0, 6, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (218, "Malpas", "BBC Introducing", 20150829, 1250, 1310, 0, 6, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (219, "Vitamin", "BBC Introducing", 20150829, 1330, 1350, 0, 6, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (220, "Area 52", "BBC Introducing", 20150829, 1410, 1430, 0, 6, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (221, "Crosa Rosa", "BBC Introducing", 20150829, 1510, 1535, 0, 6, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (222, "Ducking Punches", "BBC Introducing", 20150829, 1555, 1625, 0, 6, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (223, "John Joseph Brill", "BBC Introducing", 20150829, 1645, 1715, 0, 6, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (224, "White", "BBC Introducing", 20150829, 1735, 1805, 0, 6, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (225, "Demob Happy", "BBC Introducing", 20150829, 1825, 1855, 0, 6, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (226, "Clay", "BBC Introducing", 20150829, 1915, 1945, 0, 6, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (227, "Clean Cut Kid", "BBC Introducing", 20150829, 2005, 2040, 0, 6, "Saturday")');
//Sunday
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (228, "Narcs", "BBC Introducing", 20150830, 1130, 1150, 0, 6, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (229, "Where Fires Are", "BBC Introducing", 20150830, 1220, 1240, 0, 6, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (230, "White Room", "BBC Introducing", 20150830, 1300, 1320, 0, 6, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (231, "R51", "BBC Introducing", 20150830, 1340, 1400, 0, 6, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (232, "Skinner", "BBC Introducing", 20150830, 1420, 1440, 0, 6, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (233, "Kit Trigg", "BBC Introducing", 20150830, 1500, 1520, 0, 6, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (234, "Willie J Healey", "BBC Introducing", 20150830, 1600, 1625, 0, 6, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (235, "Hidden Charms", "BBC Introducing", 20150830, 1645, 1710, 0, 6, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (236, "Hyena", "BBC Introducing", 20150830, 1730, 1755, 0, 6, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (237, "The Big Moon", "BBC Introducing", 20150830, 1815, 1845, 0, 6, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (238, "Childcare", "BBC Introducing", 20150830, 1915, 1950, 0, 6, "Sunday")');

//Friday
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (239, "Andrew Oneill", "Alternative Stage", 20150828, 1145, 1225, 0, 7, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (240, "Nick Helm", "Alternative Stage", 20150828, 1245, 1315, 0, 7, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (241, "Reginald D Hunter", "Alternative Stage", 20150828, 1330, 1400, 0, 7, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (242, "Andrew Maxwell", "Alternative Stage", 20150828, 1415, 1445, 0, 7, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (243, "David Morgan", "Alternative Stage", 20150828, 1500, 1530, 0, 7, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (244, "Katherine Ryan", "Alternative Stage", 20150828, 1545, 1615, 0, 7, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (245, "Paul Mccaffrey", "Alternative Stage", 20150828, 1630, 1700, 0, 7, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (246, "Abandoman", "Alternative Stage", 20150828, 1715, 1800, 0, 7, "Friday")');
//Saturday
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (247, "Lliza Schlesinger", "Alternative Stage", 20150829, 1240, 1300, 0, 7, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (248, "Daniel Sloss", "Alternative Stage", 20150829, 1305, 1325, 0, 7, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (249, "Alex Edelman", "Alternative Stage", 20150829, 1330, 1350, 0, 7, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (250, "Chris Ramsey", "Alternative Stage", 20150829, 1400, 1420, 0, 7, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (251, "Pete Johansson", "Alternative Stage", 20150829, 1435, 1500, 0, 7, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (252, "Holly Walsh", "Alternative Stage", 20150829, 1510, 1540, 0, 7, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (253, "Suzi Ruffell", "Alternative Stage", 20150829, 1550, 1620, 0, 7, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (254, "Seann Walsh", "Alternative Stage", 20150829, 1635, 1705, 0, 7, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (255, "Mark Grist", "Alternative Stage", 20150829, 1715, 1745, 0, 7, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (256, "George The Poet", "Alternative Stage", 20150829, 1800, 1840, 0, 7, "Saturday")');
//Sunday
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (257, "Jarlath Regan", "Alternative Stage", 20150830, 1220, 1240, 0, 7, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (258, "Wittank", "Alternative Stage", 20150830, 1255, 1315, 0, 7, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (259, "Milton Jones", "Alternative Stage", 20150830, 1330, 1400, 0, 7, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (260, "Luisa Omielan", "Alternative Stage", 20150830, 1420, 1440, 0, 7, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (261, "Tiffany Stevenson", "Alternative Stage", 20150830, 1455, 1515, 0, 7, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (262, "Paul Chowdhry", "Alternative Stage", 20150830, 1530, 1550, 0, 7, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (263, "Sara Pascoe", "Alternative Stage", 20150830, 1605, 1630, 0, 7, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (264, "Joel Dommett", "Alternative Stage", 20150830, 1640, 1700, 0, 7, "Sunday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (265, "Russell Kane", "Alternative Stage", 20150830, 1730, 1800, 0, 7, "Sunday")');
		
		});
	db.transaction(function (tx) {	
	
	
	//Friday
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (266, "Eden (film)", "Alternative Stage", 20150828, 1745, 1930, 0, 7, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (267, "Transgressive Soundsystem + Rockfeedback Djs", "Alternative Stage", 20150828, 2130, 2230, 0, 7, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (268, "Palma Violets + Peace (dj Sets)", "Alternative Stage", 20150828, 2230, 2330, 0, 7, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (269, "Huw Stephens + Gus (alt J) (dj Sets)", "Alternative Stage", 20150828, 2330, 0030, 0, 7, "Friday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (270, "Jen Long + Bless (dj Sets)", "Alternative Stage", 20150828, 0030, 0230, 0, 7, "Friday")');
//Saturday
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (271, "Kurt Cobain: Montage Of Heck (film)", "Alternative Stage", 20150829, 1700, 1915, 0, 7, "Saturday")');
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (272, "Buttoned Down Disco", "Alternative Stage", 20150829, 2245, 0300, 0, 7, "Saturday")');
//Sunday
tx.executeSql('INSERT INTO bands_101 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (273, "Propaganda Dj", "Alternative Stage", 20150830, 2245, 0300, 0, 7, "Sunday")');
	
	tx.executeSql(' UPDATE bands_101 SET start_time=1200, finish_time=1230 WHERE band_name="Cardiknox" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1245, finish_time=1315 WHERE band_name="The Ramona Flowers" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1330, finish_time=1400 WHERE band_name="All We Are" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1415, finish_time=1500 WHERE band_name="Ferdinand Weber" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1500, finish_time=1530 WHERE band_name="Hayden James" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1535, finish_time=1630 WHERE band_name="Toyboy & Robin" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1635, finish_time=1710 WHERE band_name="My Nu Leng" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1715, finish_time=1750 WHERE band_name="Jacob Plant" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1755, finish_time=1855 WHERE band_name="Porter Robinson" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1900, finish_time=2000 WHERE band_name="Dillon Francis" ');
tx.executeSql(' UPDATE bands_101 SET start_time=2005, finish_time=2100 WHERE band_name="Hannah Wants" ');
tx.executeSql(' UPDATE bands_101 SET start_time=2110, finish_time=2200 WHERE band_name="Camo & Krooked" ');
tx.executeSql(' UPDATE bands_101 SET start_time=2230, finish_time=2330 WHERE band_name="Wilkinson" ');

tx.executeSql(' UPDATE bands_101 SET start_time=1230, finish_time=1300 WHERE band_name="Riptide Movement" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1315, finish_time=1345 WHERE band_name="Ftse" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1400, finish_time=1430 WHERE band_name="Ben Khan" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1445, finish_time=1515 WHERE band_name="Elliphant" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1530, finish_time=1615 WHERE band_name="Dj Fresh" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1615, finish_time=1700 WHERE band_name="Dimension X Kove" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1700, finish_time=1750 WHERE band_name="Secondcity" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1810, finish_time=1910 WHERE band_name="Tourist" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1930, finish_time=2015 WHERE band_name="Charli Xcx" ');
tx.executeSql(' UPDATE bands_101 SET start_time=2030, finish_time=2130 WHERE band_name="Oliver Dollar" ');
tx.executeSql(' UPDATE bands_101 SET start_time=2130, finish_time=2300 WHERE band_name="Mk" ');

tx.executeSql(' UPDATE bands_101 SET start_time=1200, finish_time=1230 WHERE band_name="The Six" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1245, finish_time=1315 WHERE band_name="Petite Meller" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1330, finish_time=1415 WHERE band_name="99 Souls" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1430, finish_time=1530 WHERE band_name="Tcts" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1535, finish_time=1605 WHERE band_name="Snakehips" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1620, finish_time=1650 WHERE band_name="Maribou State Live" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1655, finish_time=1750 WHERE band_name="Evan Christ" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1755, finish_time=1835 WHERE band_name="Rustie" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1855, finish_time=1940 WHERE band_name="Blonde Live" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1950, finish_time=2050 WHERE band_name="Brodinski" ');
tx.executeSql(' UPDATE bands_101 SET start_time=2110, finish_time=2210 WHERE band_name="Hudson Mohawke" ');
tx.executeSql(' UPDATE bands_101 SET start_time=2230, finish_time=2330 WHERE band_name="Boy Better Know" ');

tx.executeSql(' UPDATE bands_101 SET start_time=1400, finish_time=1430 WHERE band_name="Dj Target" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1445, finish_time=1515 WHERE band_name="Bugzy Malone" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1535, finish_time=1635 WHERE band_name="Siobhan Bell" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1650, finish_time=1720 WHERE band_name="Star.one W/ Ping Pong" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1735, finish_time=1810 WHERE band_name="Pell" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1830, finish_time=1910 WHERE band_name="Oneman" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1930, finish_time=2010 WHERE band_name="Rae Sremmurd" ');
tx.executeSql(' UPDATE bands_101 SET start_time=2030, finish_time=2115 WHERE band_name="Flatbush Zombies" ');
tx.executeSql(' UPDATE bands_101 SET start_time=2130, finish_time=2215 WHERE band_name="A$ap Ferg" ');

tx.executeSql(' UPDATE bands_101 SET start_time=1230, finish_time=1255 WHERE band_name="Remi Miles" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1315, finish_time=1345 WHERE band_name="Nick Brewer" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1400, finish_time=1430 WHERE band_name="Kiko Bun" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1445, finish_time=1515 WHERE band_name="Loyle Carner" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1535, finish_time=1635 WHERE band_name="Craze" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1650, finish_time=1720 WHERE band_name="Tempa T" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1735, finish_time=1810 WHERE band_name="Vince Staples" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1830, finish_time=1910 WHERE band_name="Ms Dynamite" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1920, finish_time=2020 WHERE band_name="Dj Semtex" ');
tx.executeSql(' UPDATE bands_101 SET start_time=2030, finish_time=2110 WHERE band_name="Lethal Bizzle" ');
tx.executeSql(' UPDATE bands_101 SET start_time=2135, finish_time=2220 WHERE band_name="Azealia Banks" ');

tx.executeSql(' UPDATE bands_101 SET start_time=1345, finish_time=1415 WHERE band_name="Lady Leshurr" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1430, finish_time=1500 WHERE band_name="Isaiah Dreads" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1515, finish_time=1545 WHERE band_name="Ratking" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1605, finish_time=1635 WHERE band_name="Fekky" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1650, finish_time=1720 WHERE band_name="Dope D.o.d." ');
tx.executeSql(' UPDATE bands_101 SET start_time=1735, finish_time=1810 WHERE band_name="Young Thug" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1825, finish_time=1905 WHERE band_name="Stormzy" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1920, finish_time=2000 WHERE band_name="Krept & Konan" ');

tx.executeSql(' UPDATE bands_101 SET start_time=1200, finish_time=1300 WHERE band_name="Andrew Oneill" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1300, finish_time=1345 WHERE band_name="Nick Helm" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1350, finish_time=1435 WHERE band_name="Reginald D Hunter" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1440, finish_time=1525 WHERE band_name="Andrew Maxwell" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1525, finish_time=1550 WHERE band_name="David Morgan" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1550, finish_time=1630 WHERE band_name="Katherine Ryan" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1635, finish_time=1700 WHERE band_name="Paul Mccaffrey" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1700, finish_time=1745 WHERE band_name="Abandoman" ');

tx.executeSql(' UPDATE bands_101 SET start_time=1110, finish_time=1145 WHERE band_name="Lliza Schlesinger" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1145, finish_time=1225 WHERE band_name="Daniel Sloss" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1235, finish_time=1305 WHERE band_name="Alex Edelman" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1305, finish_time=1340 WHERE band_name="Chris Ramsey" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1340, finish_time=1410 WHERE band_name="Pete Johansson" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1410, finish_time=1440 WHERE band_name="Holly Walsh" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1445, finish_time=1510 WHERE band_name="Suzi Ruffell" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1510, finish_time=1550 WHERE band_name="Seann Walsh" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1600, finish_time=1620 WHERE band_name="Mark Grist" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1620, finish_time=1700 WHERE band_name="George The Poet" ');

tx.executeSql(' UPDATE bands_101 SET start_time=1140, finish_time=1210 WHERE band_name="Jarlath Regan" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1210, finish_time=1235 WHERE band_name="Wittank" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1235, finish_time=1320 WHERE band_name="Milton Jones" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1325, finish_time=1400 WHERE band_name="Luisa Omielan" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1400, finish_time=1440 WHERE band_name="Tiffany Stevenson" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1440, finish_time=1520 WHERE band_name="Paul Chowdhry" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1525, finish_time=1605 WHERE band_name="Sara Pascoe" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1605, finish_time=1635 WHERE band_name="Joel Dommett" ');
tx.executeSql(' UPDATE bands_101 SET start_time=1635, finish_time=1720 WHERE band_name="Russell Kane" ');
		
		set_up_main_page();
	});
}













