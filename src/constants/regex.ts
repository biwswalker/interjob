const REGEX_VALIDATION = {
  CONTECT_NUMBER: /^(?:0\d{8}|(06|08|09)\d{8})$/,
  ONLY_NUMBER: /^[0-9]*$/,
  ONLY_THAI: /^[ก-๙\s]+$/,
  ONLY_THAI_NUMBER: /^[ก-๙0-9\s]*$/,
  ONLY_ENG_THAI_NUMBER: /^[a-zA-Z0-9ก-๙\s]*$/,
}
export default REGEX_VALIDATION
