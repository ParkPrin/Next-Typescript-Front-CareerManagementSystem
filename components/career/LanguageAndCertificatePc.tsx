import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React, {useState} from "react";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import Modal from "@material-ui/core/Modal";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        loginRoot: {
            ...theme.typography.button,
            backgroundColor: theme.palette.background.paper,
            padding: theme.spacing(1),
        },
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            width: 200,
        },
        addressModal: {
            position: 'absolute',
            width: 600,
            height: 280,
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[1],
            padding: theme.spacing(2, 4, 3),
        }
    }),
);

export default function LanguageAndCertificatePc(){
  const classes = useStyles();
  const [foreignLanguageType, setForeignLanguageType] = useState("0");
  const [foreignTestType, setForeignTestType] = useState("0");
  const [isCertificateOpen, setIsCertificateOpen] = useState(false);
//certificateTier
  const [certificateTier, setCertificateTier] = useState("0");
  return (
      <div>
          <div className="w3-container" style={{marginTop: "30px"}}>
              <h3>어학</h3>
              <table className="w3-table w3-bordered" style={{borderTop: "solid"}}>
                  <thead></thead>
                  <tbody>
                      <tr>
                          <th>외국어종류</th>
                          <th>시험종류</th>
                          <th>시험점수</th>
                          <th>시험등급</th>
                          <th>취득일자</th>
                          <th>비고</th>
                      </tr>
                      <tr>
                          <td colSpan={5} style={{textAlign: "center", paddingTop: "12px"}}>

                              <Typography variant="body2" gutterBottom>
                                  복수 등록이 가능합니다 아래 입력란을 이용하여 추가해주세요
                              </Typography>
                          </td>
                      </tr>
                  </tbody>
              </table>

              <div className="w3-container" style={{margin: "8px"}}>
                  <h6>등록</h6>
                  <table className="w3-table w3-bordered" style={{borderTop: "solid"}}>
                      <thead></thead>
                      <tbody>
                          <tr>
                              <th style={{verticalAlign: "middle", width: "100px"}}>외국어종류</th>
                              <td>
                                  <FormControl style={{marginTop: "8px", marginRight: "10px"}}>
                                      <Select
                                          id="foreignLanguageType"
                                          name="foreignLanguageType"
                                          value={foreignLanguageType}
                                          onChange={input => {setForeignLanguageType(input.target.value)}}
                                      >
                                          <MenuItem value={"0"}>선택</MenuItem>
                                          <MenuItem value={"1"}>중국어</MenuItem>
                                          <MenuItem value={"2"}>한국어</MenuItem>
                                          <MenuItem value={"3"}>영어</MenuItem>
                                          <MenuItem value={"4"}>불어</MenuItem>
                                          <MenuItem value={"5"}>일본어</MenuItem>
                                          <MenuItem value={"6"}>러시아어</MenuItem>
                                          <MenuItem value={"7"}>스페인어</MenuItem>
                                          <MenuItem value={"8"}>인도네시아어</MenuItem>
                                          <MenuItem value={"9"}>베트남어</MenuItem>

                                      </Select>

                                  </FormControl>
                              </td>
                              <th style={{verticalAlign: "middle"}}>시험종류</th>
                              <td>
                                  <FormControl style={{marginTop: "8px", marginRight: "10px"}}>
                                      <Select
                                          id="foreignTestType"
                                          name="foreignTestType"
                                          value={foreignTestType}
                                          onChange={input => {setForeignTestType(input.target.value)}}
                                      >
                                          <MenuItem value={"0"}>선택</MenuItem>
                                          <MenuItem value={"1"}>BCT(듣기/독해)</MenuItem>
                                          <MenuItem value={"2"}>BCT(말하기/쓰기)</MenuItem>
                                          <MenuItem value={"3"}>BULATS(COMPUTER)</MenuItem>
                                          <MenuItem value={"4"}>BULATS(SPEAKING&WRITING)</MenuItem>
                                          <MenuItem value={"5"}>BULATS(SPEAKING)</MenuItem>
                                          <MenuItem value={"6"}>BULATS(STANDARD)</MenuItem>
                                          <MenuItem value={"7"}>BULATS(WRITING)</MenuItem>
                                          <MenuItem value={"8"}>C.TEST</MenuItem>
                                          <MenuItem value={"9"}>CPT</MenuItem>
                                          <MenuItem value={"10"}>DALF</MenuItem>
                                          <MenuItem value={"11"}>DELE</MenuItem>
                                          <MenuItem value={"12"}>DELF</MenuItem>
                                          <MenuItem value={"13"}>ESPT</MenuItem>
                                          <MenuItem value={"14"}>G-TELP Ⅰ</MenuItem>
                                          <MenuItem value={"15"}>G-TELP Ⅱ</MenuItem>
                                          <MenuItem value={"16"}>G-TELP Ⅲ</MenuItem>
                                          <MenuItem value={"17"}>GMAT</MenuItem>
                                          <MenuItem value={"18"}>GRE</MenuItem>
                                          <MenuItem value={"19"}>HSK(고급)</MenuItem>
                                          <MenuItem value={"20"}>HSK(초중급)</MenuItem>
                                          <MenuItem value={"21"}>IELTS</MenuItem>
                                          <MenuItem value={"22"}>J-TEST(실용일본어검정)</MenuItem>
                                          <MenuItem value={"23"}>JPT</MenuItem>
                                          <MenuItem value={"24"}>JTRA</MenuItem>
                                          <MenuItem value={"25"}>LATT</MenuItem>
                                          <MenuItem value={"26"}>NPT</MenuItem>
                                          <MenuItem value={"27"}>OPI(러시아)</MenuItem>
                                          <MenuItem value={"28"}>OPI(베트남)</MenuItem>
                                          <MenuItem value={"29"}>OPI(스페인)</MenuItem>
                                          <MenuItem value={"30"}>OPI(영어)</MenuItem>
                                          <MenuItem value={"31"}>OPI(인도네시아)</MenuItem>
                                          <MenuItem value={"32"}>OPI(일본)</MenuItem>
                                          <MenuItem value={"33"}>OPI(중국)</MenuItem>
                                          <MenuItem value={"34"}>OPIC</MenuItem>
                                          <MenuItem value={"35"}>OPIC(러시아)</MenuItem>
                                          <MenuItem value={"36"}>OPIC(스페인)</MenuItem>
                                          <MenuItem value={"37"}>OPIC(중국)</MenuItem>
                                          <MenuItem value={"38"}>SEPT</MenuItem>
                                          <MenuItem value={"39"}>SJPT(일본어말하기시험)</MenuItem>
                                          <MenuItem value={"40"}>SSAT</MenuItem>
                                          <MenuItem value={"41"}>TEPS</MenuItem>
                                          <MenuItem value={"42"}>TOEFL(CBT)</MenuItem>
                                          <MenuItem value={"43"}>TOEFL(IBT)</MenuItem>
                                          <MenuItem value={"44"}>TOEFL(PBT)</MenuItem>
                                          <MenuItem value={"45"}>TOEFL(SPEAKING)</MenuItem>
                                          <MenuItem value={"46"}>TOEFL(WRITING)</MenuItem>
                                          <MenuItem value={"47"}>TOEIC</MenuItem>
                                          <MenuItem value={"48"}>TOEIC(SPEAKING)</MenuItem>
                                          <MenuItem value={"49"}>TOEIC(WRITING)</MenuItem>
                                          <MenuItem value={"50"}>TOPIK</MenuItem>
                                          <MenuItem value={"51"}>TSC</MenuItem>
                                          <MenuItem value={"52"}>VIETNAMSE CERTIFICATE</MenuItem>
                                          <MenuItem value={"53"}>관광통역안내사</MenuItem>
                                          <MenuItem value={"54"}>국어능력인증시험</MenuItem>
                                          <MenuItem value={"55"}>번역사</MenuItem>
                                          <MenuItem value={"56"}>서울대 일본어</MenuItem>
                                          <MenuItem value={"57"}>실용영어</MenuItem>
                                          <MenuItem value={"58"}>외국어능력검사</MenuItem>
                                          <MenuItem value={"59"}>일본어능력시험</MenuItem>

                                      </Select>

                                  </FormControl>
                              </td>
                          </tr>
                          <tr>
                              <th style={{verticalAlign: "middle"}}>시험점수</th>
                              <td>
                                  <TextField style={{marginLeft: "20px",  marginBottom: "5px"}} id="testScore" name="testScore" label="점수" error={false} />
                              </td>
                              <th style={{verticalAlign: "middle"}}>시험등급</th>
                              <td>
                                  <TextField style={{marginLeft: "20px",  marginBottom: "5px"}} id="testTier" name="testTier" label="등급" error={false} />
                              </td>
                          </tr>
                          <tr>
                              <th style={{verticalAlign: "middle"}}>취득일자</th>
                              <td colSpan={3}>
                                  <TextField
                                      style={{paddingTop: "5px"}}
                                      id="foreignTestGetDate"
                                      name="foreignTestGetDate"
                                      type="date"
                                      helperText="취득일자"
                                      className={classes.textField}
                                      InputLabelProps={{
                                          shrink: true,
                                      }}
                                  />
                              </td>
                          </tr>
                      </tbody>
                  </table>
                  <div style={{marginLeft: "80%", marginTop: "15px"}}>
                      <Button variant="contained" color="secondary" size="small" name="foreignTestSave" id="foreignTestSave" style={{marginRight: "5px"}}>
                          등록
                      </Button>

                      <Button variant="contained"  size="small" name="foreignTestCancle" id="foreignTestCancle">
                          취소
                      </Button>
                  </div>
              </div>
          </div>
          <div className="w3-container" style={{marginTop: "30px"}}>
              <h3>자격사항</h3>
              <table className="w3-table w3-bordered" style={{borderTop: "solid"}}>
                  <thead>
                  </thead>
                  <tbody>
                      <tr>
                          <th>자격증종류</th>
                          <th>등급</th>
                          <th>면허번호</th>
                          <th>인증기관</th>
                          <th>취득일자</th>
                          <th>비고</th>
                      </tr>
                      <tr>
                          <td colSpan={6} style={{textAlign: "center", paddingTop: "12px"}}>
                              <Typography variant="body2" gutterBottom>
                                  복수 등록이 가능합니다 아래 입력란을 이용하여 추가해주세요
                              </Typography>
                          </td>
                      </tr>
                  </tbody>

              </table>

              <div className="w3-container" style={{margin: "8px"}}>
                  <h6>등록</h6>
                  <table className="w3-table w3-bordered" style={{borderTop: "solid"}}>
                      <thead></thead>
                      <tbody>
                          <tr>
                              <th style={{verticalAlign: "middle", width: "100px"}}>자격증종류</th>
                              <td style={{paddingTop: "0px", width: "300px"}}>
                                  <TextField id="certificateName" name="certificateName"  error={false} helperText="" label="자격증명" disabled={true} style={{marginLeft: "20px",  }}
                                             onClick={() =>  {setIsCertificateOpen(true)}}
                                  />
                                  <Button variant="contained" color="primary" size="small" name="certificateNameSearch" id="certificateNameSearch"
                                          onClick={() =>  {setIsCertificateOpen(true)}}
                                          style={{marginTop: "15px", marginLeft: "10px"}} >
                                      검색
                                  </Button>
                                  <Modal
                                      open={isCertificateOpen}
                                      onClose={() => {setIsCertificateOpen(false)}}
                                      aria-labelledby="simple-modal-title"
                                      aria-describedby="simple-modal-description"
                                  >
                                      <div style={{top: '50%', left: '50%', transform: 'translate(-50%, -50%)', paddingLeft: "0px", paddingRight: "0px"}} className={classes.addressModal}>
                                          <div style={{borderBottom: "solid", borderBottomWidth: "thin"}}>
                                              <Typography variant="h6" gutterBottom style={{paddingLeft: "20px", color: "#2e86de", fontWeight: "bold"}}>
                                                  자격증명 검색
                                              </Typography>
                                          </div>
                                          <div style={{paddingLeft: "20px", paddingRight: "20px"}}>
                                              <header style={{marginTop: "20px"}}>

                                              </header>
                                              <main>
                                                  <div style={{margin: "15px" }}>
                                                      <div style={{ backgroundColor: "#f5f6fa"}}>
                                                          <TextField style={{marginLeft: "20px",  marginBottom: "5px"}} id="address_select" label="자격증명" error={false} />
                                                          <Button variant="contained" color="primary"   style={{marginTop: "15px", marginLeft: "10px"}} >
                                                              검색
                                                          </Button>
                                                      </div>
                                                  </div>
                                              </main>
                                              <footer>

                                              </footer>
                                          </div>
                                      </div>

                                  </Modal>
                              </td>
                              <th style={{verticalAlign: "middle"}}>등급</th>
                              <td>
                                  <FormControl style={{marginTop: "8px", marginRight: "10px"}}>
                                      <Select
                                          id="certificateTier"
                                          name="certificateTier"
                                          value={certificateTier}
                                          onChange={input => {setCertificateTier(input.target.value)}}
                                      >
                                          <MenuItem value={"0"}>선택</MenuItem>
                                          <MenuItem value={"1"}>1급</MenuItem>
                                          <MenuItem value={"2"}>1단</MenuItem>
                                          <MenuItem value={"3"}>1종대형</MenuItem>
                                          <MenuItem value={"4"}>1종보통</MenuItem>
                                          <MenuItem value={"5"}>1종특수</MenuItem>
                                          <MenuItem value={"6"}>2급</MenuItem>
                                          <MenuItem value={"7"}>2단</MenuItem>
                                          <MenuItem value={"8"}>2종보통</MenuItem>
                                          <MenuItem value={"9"}>2종소형</MenuItem>
                                          <MenuItem value={"10"}>3급</MenuItem>
                                          <MenuItem value={"11"}>3단</MenuItem>
                                          <MenuItem value={"12"}>4급이상</MenuItem>
                                          <MenuItem value={"13"}>4단이상</MenuItem>
                                          <MenuItem value={"14"}>Black Belt</MenuItem>
                                          <MenuItem value={"15"}>Core</MenuItem>
                                          <MenuItem value={"16"}>Expert</MenuItem>
                                          <MenuItem value={"17"}>Green Belt</MenuItem>
                                          <MenuItem value={"18"}>Level1</MenuItem>
                                          <MenuItem value={"19"}>Level2</MenuItem>
                                          <MenuItem value={"20"}>Level3</MenuItem>
                                          <MenuItem value={"21"}>MASTER</MenuItem>
                                          <MenuItem value={"22"}>Master Black Belt</MenuItem>
                                          <MenuItem value={"23"}>감사사</MenuItem>
                                          <MenuItem value={"24"}>고급</MenuItem>
                                          <MenuItem value={"25"}>기능사1급</MenuItem>
                                          <MenuItem value={"26"}>기능사2급</MenuItem>
                                          <MenuItem value={"27"}>기능사보</MenuItem>
                                          <MenuItem value={"28"}>기능장</MenuItem>
                                          <MenuItem value={"29"}>기사1급</MenuItem>
                                          <MenuItem value={"30"}>기사2급</MenuItem>
                                          <MenuItem value={"31"}>기술사</MenuItem>
                                          <MenuItem value={"32"}>무등급</MenuItem>
                                          <MenuItem value={"33"}>원동기</MenuItem>
                                          <MenuItem value={"34"}>초급</MenuItem>
                                          <MenuItem value={"35"}>중급</MenuItem>
                                          <MenuItem value={"36"}>특급</MenuItem>
                                      </Select>

                                  </FormControl>
                              </td>
                          </tr>
                          <tr>
                              <th style={{verticalAlign: "middle"}}>면허번호</th>
                              <td>
                                  <TextField style={{marginLeft: "20px",  marginBottom: "5px"}} id="certificateNumber" name="certificateNumber" error={false} />
                              </td>
                              <th style={{verticalAlign: "middle"}}>인증기관</th>
                              <td>
                                  <TextField style={{marginLeft: "20px",  marginBottom: "5px"}} id="certification" name="certification" error={false} />
                              </td>
                          </tr>
                          <tr>
                              <th style={{verticalAlign: "middle"}}>취득일자</th>
                              <td colSpan={3}>
                                  <TextField
                                      style={{paddingTop: "5px"}}
                                      id="certificateGetDate"
                                      name="certificateGetDate"
                                      type="date"
                                      className={classes.textField}
                                      InputLabelProps={{
                                          shrink: true,
                                      }}
                                  />
                              </td>
                          </tr>
                      </tbody>
                  </table>
                  <div style={{marginLeft: "80%", marginTop: "15px"}}>
                      <Button variant="contained" color="secondary" size="small" name="certificateSave" id="certificateSave" style={{marginRight: "5px"}}>
                          등록
                      </Button>

                      <Button variant="contained"  size="small" name="certificateCancle" id="certificateCancle">
                          취소
                      </Button>
                  </div>
              </div>
          </div>

          <div className="w3-container" style={{marginTop: "30px"}}>
              <h3>수상경력</h3>
              <table className="w3-table w3-bordered" style={{borderTop: "solid"}}>
                  <thead></thead>
                  <tbody>
                      <tr>
                          <th>명칭</th>
                          <th>기관(단체)명</th>
                          <th>일자</th>
                          <th>내용</th>
                          <th>비고</th>
                      </tr>
                      <tr>
                          <td colSpan={5} style={{textAlign: "center", paddingTop: "12px"}}>
                              <Typography variant="body2" gutterBottom>
                                  복수 등록이 가능합니다 아래 입력란을 이용하여 추가해주세요
                              </Typography>
                          </td>
                      </tr>
                  </tbody>
              </table>

              <div className="w3-container" style={{margin: "8px"}}>
                  <h6>등록</h6>
                  <table className="w3-table w3-bordered" style={{borderTop: "solid"}}>
                      <thead></thead>
                      <tbody>
                          <tr>
                              <th style={{verticalAlign: "middle"}}>명칭</th>
                              <td><TextField style={{marginLeft: "20px",  marginBottom: "5px"}} id="awardedName" name="awardedName" helperText="15자 이내" error={false} /></td>
                              <th style={{verticalAlign: "middle"}}>기관(단체)명</th>
                              <td><TextField style={{marginLeft: "20px",  marginBottom: "5px"}} id="awardInstitutionsName" name="awardInstitutionsName" helperText="15자 이내" error={false} /></td>
                          </tr>
                          <tr>
                              <th style={{verticalAlign: "middle"}}>내용</th>
                              <td colSpan={3}><TextField style={{marginLeft: "20px",  marginBottom: "5px", width: "500px"}} id="awardedContent" name="awardedContent" helperText="30자 이내"  error={false} /></td>
                          </tr>
                          <tr>
                              <th style={{verticalAlign: "middle"}}>일자</th>
                              <td colSpan={3}>
                                  <TextField
                                      style={{paddingTop: "5px"}}
                                      id="awardedDate"
                                      name="awardedDate"
                                      type="date"
                                      helperText="예시 YYYY-MM-DD"
                                      className={classes.textField}
                                      InputLabelProps={{
                                          shrink: true,
                                      }}
                                  />
                              </td>
                          </tr>
                      </tbody>
                  </table>
                  <div style={{marginLeft: "80%", marginTop: "15px"}}>
                      <Button variant="contained" color="secondary" size="small" name="awardedSave" id="awardedSave" style={{marginRight: "5px"}}>
                          등록
                      </Button>

                      <Button variant="contained"  size="small" name="awardedCancle" id="awardedCancle">
                          취소
                      </Button>
                  </div>
              </div>
          </div>

          <div className="w3-container" style={{marginTop: "30px"}}>
              <h3>활동내역</h3>
              <table className="w3-table w3-bordered" style={{borderTop: "solid"}}>
                  <thead></thead>
                  <tbody>
                      <tr>
                          <th>활동명</th>
                          <th>기관(단체)명</th>
                          <th>기간</th>
                          <th>내용</th>
                          <th>비고</th>
                      </tr>
                      <tr>
                          <td colSpan={5} style={{textAlign: "center", paddingTop: "12px"}}>
                              <Typography variant="body2" gutterBottom>
                                  복수 등록이 가능합니다 아래 입력란을 이용하여 추가해주세요
                              </Typography>
                          </td>
                      </tr>
                  </tbody>
              </table>

              <div className="w3-container" style={{margin: "8px"}}>
                  <h6>등록</h6>
                  <table className="w3-table w3-bordered" style={{borderTop: "solid"}}>
                      <thead></thead>
                      <tbody>
                          <tr>
                              <th style={{verticalAlign: "middle"}}>활동명</th>
                              <td><TextField style={{marginLeft: "20px",  marginBottom: "5px"}} id="activityName" name="activityName" helperText="15자 이내" error={false} /></td>
                              <th style={{verticalAlign: "middle"}}>기관(단체)명</th>
                              <td><TextField style={{marginLeft: "20px",  marginBottom: "5px"}} id="activityInstitutionsName" name="activityInstitutionsName" helperText="15자 이내" error={false} /></td>
                          </tr>
                          <tr>
                              <th style={{verticalAlign: "middle"}}>기간</th>
                              <td colSpan={3}>
                                  <TextField
                                      style={{paddingTop: "5px"}}
                                      id="activityStartDate"
                                      name="activityStartDate"
                                      type="date"
                                      helperText="예시 YYYY-MM-DD"
                                      className={classes.textField}
                                      InputLabelProps={{
                                          shrink: true,
                                      }}
                                  />
                                  <div style={{display:"inline"}}>_</div>
                                  <TextField
                                      style={{paddingTop: "5px"}}
                                      id="activityEndDate"
                                      name="activityEndDate"
                                      type="date"
                                      helperText="예시 YYYY-MM-DD"
                                      className={classes.textField}
                                      InputLabelProps={{
                                          shrink: true,
                                      }}
                                  />
                              </td>
                          </tr>
                          <tr>
                              <th style={{verticalAlign: "middle"}}>내용</th>
                              <td colSpan={3}><TextField style={{marginLeft: "20px",  marginBottom: "5px", width: "500px"}} id="activityContent" name="activityContent" helperText="30자 이내"  error={false} /></td>
                          </tr>
                      </tbody>
                  </table>
                  <div style={{marginLeft: "80%", marginTop: "15px"}}>
                      <Button variant="contained" color="secondary" size="small" name="activitySave" id="activitySave" style={{marginRight: "5px"}}>
                          등록
                      </Button>

                      <Button variant="contained"  size="small" name="activityCancle" id="activityCancle">
                          취소
                      </Button>
                  </div>
              </div>
          </div>
      </div>
  )
}