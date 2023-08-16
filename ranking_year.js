const rankingYear = [
  { year: 1993, team: 'Brazil', fifa_rank: 1 },
  { year: 1993, team: 'Germany', fifa_rank: 1 },
  { year: 1993, team: 'Italy', fifa_rank: 2 },
  { year: 1993, team: 'Norway', fifa_rank: 2 },
  { year: 1993, team: 'Switzerland', fifa_rank: 3 },
  { year: 1994, team: 'Brazil', fifa_rank: 1 },
  { year: 1994, team: 'Germany', fifa_rank: 1 },
  { year: 1994, team: 'Italy', fifa_rank: 2 },
  { year: 1994, team: 'Netherlands', fifa_rank: 2 },
  { year: 1994, team: 'Norway', fifa_rank: 3 },
  { year: 1995, team: 'Brazil', fifa_rank: 1 },
  { year: 1995, team: 'Germany', fifa_rank: 2 },
  { year: 1995, team: 'Italy', fifa_rank: 2 },
  { year: 1995, team: 'Norway', fifa_rank: 2 },
  { year: 1995, team: 'Spain', fifa_rank: 2 },
  { year: 1996, team: 'Brazil', fifa_rank: 1 },
  { year: 1996, team: 'Germany', fifa_rank: 2 },
  { year: 1996, team: 'France', fifa_rank: 3 },
  { year: 1996, team: 'Russia', fifa_rank: 3 },
  { year: 1996, team: 'Czech Republic', fifa_rank: 4 },
  { year: 1997, team: 'Brazil', fifa_rank: 1 },
  { year: 1997, team: 'Germany', fifa_rank: 2 },
  { year: 1997, team: 'Denmark', fifa_rank: 3 },
  { year: 1997, team: 'France', fifa_rank: 3 },
  { year: 1997, team: 'Romania', fifa_rank: 3 },
  { year: 1998, team: 'Brazil', fifa_rank: 1 },
  { year: 1998, team: 'France', fifa_rank: 2 },
  { year: 1998, team: 'Germany', fifa_rank: 2 },
  { year: 1998, team: 'Czech Republic', fifa_rank: 3 },
  { year: 1998, team: 'Croatia', fifa_rank: 4 },
  { year: 1999, team: 'Brazil', fifa_rank: 1 },
  { year: 1999, team: 'Czech Republic', fifa_rank: 2 },
  { year: 1999, team: 'France', fifa_rank: 2 },
  { year: 1999, team: 'Croatia', fifa_rank: 3 },
  { year: 1999, team: 'Germany', fifa_rank: 3 },
  { year: 2000, team: 'Brazil', fifa_rank: 1 },
  { year: 2000, team: 'Czech Republic', fifa_rank: 2 },
  { year: 2000, team: 'France', fifa_rank: 2 },
  { year: 2000, team: 'Argentina', fifa_rank: 3 },
  { year: 2000, team: 'Spain', fifa_rank: 4 },
  { year: 2001, team: 'Brazil', fifa_rank: 1 },
  { year: 2001, team: 'France', fifa_rank: 1 },
  { year: 2001, team: 'Argentina', fifa_rank: 3 },
  { year: 2001, team: 'Italy', fifa_rank: 4 },
  { year: 2001, team: 'Portugal', fifa_rank: 4 },
  { year: 2002, team: 'Brazil', fifa_rank: 1 },
  { year: 2002, team: 'France', fifa_rank: 1 },
  { year: 2002, team: 'Argentina', fifa_rank: 2 },
  { year: 2002, team: 'Spain', fifa_rank: 3 },
  { year: 2002, team: 'Colombia', fifa_rank: 4 },
  { year: 2003, team: 'Brazil', fifa_rank: 1 },
  { year: 2003, team: 'France', fifa_rank: 2 },
  { year: 2003, team: 'Spain', fifa_rank: 2 },
  { year: 2003, team: 'Argentina', fifa_rank: 4 },
  { year: 2003, team: 'Germany', fifa_rank: 4 },
  { year: 2004, team: 'Brazil', fifa_rank: 1 },
  { year: 2004, team: 'France', fifa_rank: 2 },
  { year: 2004, team: 'Argentina', fifa_rank: 3 },
  { year: 2004, team: 'Spain', fifa_rank: 3 },
  { year: 2004, team: 'Mexico', fifa_rank: 4 },
  { year: 2005, team: 'Brazil', fifa_rank: 1 },
  { year: 2005, team: 'Argentina', fifa_rank: 2 },
  { year: 2005, team: 'Czech Republic', fifa_rank: 2 },
  { year: 2005, team: 'France', fifa_rank: 2 },
  { year: 2005, team: 'Netherlands', fifa_rank: 2 },
  { year: 2006, team: 'Brazil', fifa_rank: 1 },
  { year: 2006, team: 'Czech Republic', fifa_rank: 2 },
  { year: 2006, team: 'France', fifa_rank: 2 },
  { year: 2006, team: 'Italy', fifa_rank: 2 },
  { year: 2006, team: 'Argentina', fifa_rank: 3 },
  { year: 2007, team: 'Argentina', fifa_rank: 1 },
  { year: 2007, team: 'Brazil', fifa_rank: 1 },
  { year: 2007, team: 'Italy', fifa_rank: 1 },
  { year: 2007, team: 'France', fifa_rank: 4 },
  { year: 2007, team: 'Germany', fifa_rank: 4 },
  { year: 2008, team: 'Argentina', fifa_rank: 1 },
  { year: 2008, team: 'Spain', fifa_rank: 1 },
  { year: 2008, team: 'Brazil', fifa_rank: 2 },
  { year: 2008, team: 'Germany', fifa_rank: 2 },
  { year: 2008, team: 'Italy', fifa_rank: 2 },
  { year: 2009, team: 'Brazil', fifa_rank: 1 },
  { year: 2009, team: 'Spain', fifa_rank: 1 },
  { year: 2009, team: 'Germany', fifa_rank: 2 },
  { year: 2009, team: 'Netherlands', fifa_rank: 2 },
  { year: 2009, team: 'Italy', fifa_rank: 4 },
  { year: 2010, team: 'Brazil', fifa_rank: 1 },
  { year: 2010, team: 'Spain', fifa_rank: 1 },
  { year: 2010, team: 'Netherlands', fifa_rank: 2 },
  { year: 2010, team: 'Germany', fifa_rank: 3 },
  { year: 2010, team: 'Portugal', fifa_rank: 3 },
  { year: 2011, team: 'Netherlands', fifa_rank: 1 },
  { year: 2011, team: 'Spain', fifa_rank: 1 },
  { year: 2011, team: 'Brazil', fifa_rank: 3 },
  { year: 2011, team: 'Germany', fifa_rank: 3 },
  { year: 2011, team: 'Argentina', fifa_rank: 4 },
  { year: 2012, team: 'Spain', fifa_rank: 1 },
  { year: 2012, team: 'Germany', fifa_rank: 2 },
  { year: 2012, team: 'Uruguay', fifa_rank: 2 },
  { year: 2012, team: 'Argentina', fifa_rank: 3 },
  { year: 2012, team: 'England', fifa_rank: 3 },
  { year: 2013, team: 'Spain', fifa_rank: 1 },
  { year: 2013, team: 'Argentina', fifa_rank: 2 },
  { year: 2013, team: 'Germany', fifa_rank: 2 },
  { year: 2013, team: 'Colombia', fifa_rank: 3 },
  { year: 2013, team: 'Croatia', fifa_rank: 4 },
  { year: 2014, team: 'Germany', fifa_rank: 1 },
  { year: 2014, team: 'Spain', fifa_rank: 1 },
  { year: 2014, team: 'Argentina', fifa_rank: 2 },
  { year: 2014, team: 'Brazil', fifa_rank: 3 },
  { year: 2014, team: 'Colombia', fifa_rank: 3 },
  { year: 2015, team: 'Argentina', fifa_rank: 1 },
  { year: 2015, team: 'Belgium', fifa_rank: 1 },
  { year: 2015, team: 'Germany', fifa_rank: 1 },
  { year: 2015, team: 'Colombia', fifa_rank: 3 },
  { year: 2015, team: 'Portugal', fifa_rank: 4 },
  { year: 2016, team: 'Argentina', fifa_rank: 1 },
  { year: 2016, team: 'Belgium', fifa_rank: 1 },
  { year: 2016, team: 'Germany', fifa_rank: 2 },
  { year: 2016, team: 'Brazil', fifa_rank: 3 },
  { year: 2016, team: 'Colombia', fifa_rank: 3 },
  { year: 2017, team: 'Argentina', fifa_rank: 1 },
  { year: 2017, team: 'Brazil', fifa_rank: 1 },
  { year: 2017, team: 'Germany', fifa_rank: 1 },
  { year: 2017, team: 'Portugal', fifa_rank: 3 },
  { year: 2017, team: 'Chile', fifa_rank: 4 },
  { year: 2018, team: 'Belgium', fifa_rank: 1 },
  { year: 2018, team: 'France', fifa_rank: 1 },
  { year: 2018, team: 'Germany', fifa_rank: 1 },
  { year: 2018, team: 'Brazil', fifa_rank: 2 },
  { year: 2018, team: 'Portugal', fifa_rank: 3 },
  { year: 2019, team: 'Belgium', fifa_rank: 1 },
  { year: 2019, team: 'Brazil', fifa_rank: 2 },
  { year: 2019, team: 'France', fifa_rank: 2 },
  { year: 2019, team: 'Croatia', fifa_rank: 4 },
  { year: 2019, team: 'England', fifa_rank: 4 },
  { year: 2020, team: 'Belgium', fifa_rank: 1 },
  { year: 2020, team: 'France', fifa_rank: 2 },
  { year: 2020, team: 'Brazil', fifa_rank: 3 },
  { year: 2020, team: 'England', fifa_rank: 4 },
  { year: 2020, team: 'Portugal', fifa_rank: 5 },
  { year: 2021, team: 'Belgium', fifa_rank: 1 },
  { year: 2021, team: 'Brazil', fifa_rank: 2 },
  { year: 2021, team: 'France', fifa_rank: 2 },
  { year: 2021, team: 'England', fifa_rank: 3 },
  { year: 2021, team: 'Italy', fifa_rank: 4 },
  { year: 2022, team: 'Belgium', fifa_rank: 1 },
  { year: 2022, team: 'Brazil', fifa_rank: 1 },
  { year: 2022, team: 'France', fifa_rank: 3 },
  { year: 2022, team: 'Argentina', fifa_rank: 4 },
  { year: 2022, team: 'England', fifa_rank: 5 },
];

export default rankingYear;