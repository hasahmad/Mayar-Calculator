/**
 * createDate
 * Returns a new Date object
 * parameters:
 *   y = yyyy -> year
 *   m = mm   -> month
 *   y = dd   -> day
 */
function createDate(y, m, d) {
  return new Date(`${y}-${m}-${d}`);
}

/**
 * chkAge
 * Returns whether the given age is a Tifl and in Mayar or Khadim or not.
 * 
 * For the Year 2018 - 2019, the Atfal Mayar (Groups) can be determined from the division below.
 * 
 * MAYAR & GROUP ---------------------- TIFL’S DATE OF BIRTH
 * ----------------------------------------------------------
 * Mayar Saghir Group 1 --------------- Date of Birth is  from November 1, 2009 to October 31 2011
 * Mayar Saghir Group 2 --------------- Date of Birth is  from November 1, 2006 to October 31, 2009
 * Mayar Kabir ------------------------ Date of Birth is  from November 1, 2003 to October 31, 2006
 * 
 * parameters:
 *   age -> New Date Object
 */
function chkAge(aDate) {
  var result = "";
  var today = new Date();
  var current_yr_nov = createDate(today.getFullYear(), 11, 01);
  
  /**
   * if `today` is between November 1 to Jan 1 of this year, then ...
   * 
   * Example:
   * Current date = Nov 10, 2017
   * 
   * MS G1 Nov    = nov_1     = 2017-9        = 2008
   * MS G2 Nov    = nov_2     = 2017-12       = 2005
   * MK Nov       = nov_3     = 2017-15       = 2002
   * 
   * MS G1 Oct    = oct_1     = 2017-7        = 2010
   * MS G2 Oct    = oct_2     = 2017-9        = 2008
   * MK Oct       = oct_3     = 2017-12       = 2005
   */
  
  let nov_s1 = createDate(today.getFullYear() - 10, 11, 1);
  let nov_s2 = createDate(today.getFullYear() - 13, 11, 1);
  let nov_k = createDate(today.getFullYear() - 16, 11, 1);

  let oct_s1 = createDate(today.getFullYear() - 8, 10, 31);
  let oct_s2 = createDate(today.getFullYear() - 10, 10, 31);
  let oct_k = createDate(today.getFullYear() - 13, 10, 31);
  
  /**
   * check if `today` is between Jan 1 to November 1 of this year, then ...
   * 
   * Example:
   * Current date = June 20, 2018
   * 
   * MS G1 Nov    = nov_1     = 2018-10       = 2008
   * MS G2 Nov    = nov_2     = 2018-13       = 2005
   * MK Nov       = nov_3     = 2018-16       = 2002
   * 
   * MS G1 Oct    = oct_1     = 2018-8        = 2010
   * MS G2 Oct    = oct_2     = 2018-10       = 2008
   * MK Oct       = oct_3     = 2018-13       = 2005
   */
  
//   if ((today < current_yr_nov) && today >= createDate(today.getFullYear(), 01, 01)) {
//       let nov_1 = createDate(today.getFullYear() - 10, 11, 1);
//       let nov_2 = createDate(today.getFullYear() - 13, 11, 1);
//       let nov_3 = createDate(today.getFullYear() - 16, 11, 1);

//       let oct_1 = createDate(today.getFullYear() - 8, 10, 31);
//       let oct_2 = createDate(today.getFullYear() - 10, 10, 31);
//       let oct_3 = createDate(today.getFullYear() - 13, 10, 31);
//   }
  
  /**
   * Checks and compares the given date with the Mayar group dates
   * 
   * Example:
   * Given date = `2006-10-31`
   * today = June 20, 2018
   * 
   * (date >= `2008-11-01` = false) & (date <= `2010-11-01` = true) = false
   * (date >= `2005-11-01` = true) & (date <= `2008-11-01` = true) = true
   * (date >= `2002-11-01` = true) & (date <= `2005-11-01` = true) = true
   */
  switch (true) {
      case (aDate >= nov_s1 && aDate <= oct_s1): // Mayar Saghir Group 1
          result = "Tifl - Mayar Saghir Group 1";
          break;
      case (aDate >= nov_s2 && aDate <= oct_s2): // Mayar Saghir Group 2
          result = "Tifl - Mayar Saghir Group 2";
          break;
      case (aDate >= nov_k && aDate <= oct_k): // Mayar Kabir
          result = "Tifl - Mayar Kabir";
          break;
      case (aDate >= oct_s1): // Not yet Tifl
          result = "Not Tifl yet";
          break;
      case (aDate <= nov_k): // Khadim
          result = "Khadim";
          break;
      default:
          result = "Invalid Input"; // Don't know
          break;
  }

  return result;
}




