const encodedString = "Vm0weGQxTnRVWGxXYTFwUFZsZG9WRmxVU2xOalJsSlZWR3RPYW1KR1ZqTldNakZIWVZVeFYxTnNXbFpXTTFGM1ZrUktTMUl4WkhOaFJtUnBWMFZLUlZkV1VrZFpWMDV6V2toT2FsSnVRazlWYlhoM1ZGWmFjVk5xVWxoaVZrWXpWR3hXYzFsV1NuTlRiR2hhWWtkU2RsbHFSbXRXVmtaMFpFWmFUbFpVVmtsV2Fra3hWVEpHUjFOcVdsTmlSMUpZV1ZSR1MxRXhVbk5TVkd4UlZWUXdPUT09";

const decodedString = atob(encodedString);

const repeatedString = decodedString.repeat(8);

console.log(repeatedString);
