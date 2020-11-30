import React  from 'react'
import {createStyles, withStyles, WithStyles} from "@material-ui/core/styles";
import {Theme} from "@material-ui/core/styles/createMuiTheme";
import initExecute from "../../utils/InitExecuteMethod";
import {InitExecuteValiable} from "../../interfaces/initExecuteValiable";
import {NextPageContext} from "next";
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';

export interface BasicPersonalInformationState {
    ko_value : string
    localType : string
    localPhone : string
    presetPhoneNumber : string
    cellPhone : string
    autoFocusId : string
    isModalOpen: boolean
    isMilitary : string
    militaryType : string
    militaryTier : string
    veteransType : string
    veteransTarget : string
    veteransNum : string
    obstacleType : string
    obstacleTier : string
}

const useStyles = (theme: Theme) =>
    createStyles({

        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            width: 200,
        },
        addressModal: {
            position: 'absolute',
            width: 600,
            height: 300,
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[1],
            padding: theme.spacing(2, 4, 3),
        }
    });

export interface BasicPersonalInformationPageProps extends WithStyles<typeof useStyles>{
    initExecuteValiable: InitExecuteValiable
}

class BasicPersonalInformation extends React.Component<BasicPersonalInformationPageProps, BasicPersonalInformationState> {
    state = {
        ko_value : "",
        localType: '02',
        localPhone : "",
        presetPhoneNumber : "010",
        cellPhone : "",
        autoFocusId : "",
        isModalOpen : false,
        isMilitary : "0",
        militaryType : "0",
        militaryTier : "0",
        veteransType : "0",
        veteransTarget : "0",
        veteransNum : "",
        obstacleType : "0",
        obstacleTier : "0"

    }

    changeLocalPhone = (event: React.ChangeEvent<HTMLInputElement>) => {
        let targetValue1 = event.target.value;
        let saveValue1 = this.state.localPhone;
        let addChat = targetValue1.substring(targetValue1.length-1, targetValue1.length);
        if (saveValue1.length < targetValue1.length) if (isNaN(Number(addChat))) return
        if (targetValue1.length === 3 && saveValue1.length < targetValue1.length) {
            targetValue1 = targetValue1 + "-";
        } else if (targetValue1.length === 4 && saveValue1.length > targetValue1.length){
            targetValue1 = targetValue1.substring(0, 3)
        } else if (targetValue1.length >= 9){
            return;
        } else if (saveValue1.length === 3 && targetValue1.length === 4) {
            targetValue1 = saveValue1 + "-" + addChat;
        }
        this.setState({
            localPhone: targetValue1,
            autoFocusId : "localPhone"
        })
    };

    changeCellPhone = (event: React.ChangeEvent<HTMLInputElement>) => {
        let targetValue = event.target.value;
        let saveValue = this.state.cellPhone;
        let addChat = targetValue.substring(targetValue.length-1, targetValue.length);
        if (saveValue.length < targetValue.length) if (isNaN(Number(addChat))) return
        if (targetValue.length ===4 && saveValue.length < targetValue.length) {
            targetValue = targetValue + "-";
        } else if (targetValue.length === 5 && saveValue.length > targetValue.length){
            targetValue = targetValue.substring(0, 4)
        } else if (targetValue.length >= 10){
            return;
        } else if (saveValue.length === 4 && targetValue.length === 5) {
            targetValue = saveValue + "-" + addChat;
        }
        this.setState({
            cellPhone : targetValue,
            autoFocusId : "cellPhone"
        })
    }



    static async getInitialProps({ req, res }: NextPageContext) {
        const initExecuteValiable = await initExecute(req);
        if(initExecuteValiable.redirectUrl !== ""){
            res?.writeHead(301, {
                Location: initExecuteValiable.redirectUrl
            });
            res?.end();
        }
        return {initExecuteValiable}
    }

    render() {
        const {classes, initExecuteValiable} = this.props;

        const modalOpen = () => {
            this.setState({
                isModalOpen : true
            })
        }

        const modalClose = () => {
            this.setState({
                isModalOpen : false
            })
        }


        const changeSelectValue = (event: React.ChangeEvent<{ value: unknown }>) => {
            // @ts-ignore
            this.setState({
                [event.target.name] : event.target.value as string
            })
        };


        /*
        isMilitary : "0",
        militaryType : "0",
        militaryTier : "0",
         */


        return (

            <div>
                {initExecuteValiable.isDevice ?
                    <div>

                    </div>
                    :

                    <div>
                        <div className="w3-container" style={{marginTop: "30px"}}>
                            <h3>고등학교</h3>
                            <table className="w3-table w3-bordered" style={{borderTop: "solid"}}>
                                <tr>
                                    <th>학교명</th>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>계열</th>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>기간</th>
                                    <td></td>
                                </tr>
                            </table>
                        </div>

                        <div className="w3-container" style={{marginTop: "30px"}}>
                            <h3>전문대학</h3>
                            <table className="w3-table w3-bordered" style={{borderTop: "solid"}}>
                                <tr>
                                    <th>학교명</th>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>졸업구분</th>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>전공명</th>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>학점</th>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>기간</th>
                                    <td></td>
                                </tr>
                            </table>
                            <div style={{margin: "15px"}}>
                                <Typography variant="body2" gutterBottom>
                                    *학점의 만점이 10점을 초과하는 경우, 10점 만점 기준으로 환산하여 입력해 주시기 바랍니다.
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    *전문대학의 경우 최종학교를 기재해 주세요
                                </Typography>
                            </div>

                        </div>

                        <div className="w3-container" style={{marginTop: "30px"}}>
                            <h3>대학교</h3>
                            <table className="w3-table w3-bordered" style={{borderTop: "solid"}}>
                                <tr>
                                    <th>학교명</th>
                                    <th>기간</th>
                                    <th>전공명</th>
                                    <th>학점</th>
                                    <th>비고</th>
                                </tr>
                                <tr>
                                    <td colSpan={5} style={{textAlign: "center", paddingTop: "12px"}}>

                                        <Typography variant="body2" gutterBottom>
                                            복수 등록이 가능합니다 아래 입력란을 이용하여 추가해주세요
                                        </Typography>
                                    </td>
                                </tr>
                            </table>

                            <div className="w3-container" style={{margin: "8px"}}>
                                <h6>등록</h6>
                                <table className="w3-table w3-bordered" style={{borderTop: "solid"}}>
                                    <tr>
                                        <th>학교명</th>
                                        <td colSpan={3}></td>
                                    </tr>
                                    <tr>
                                        <th>졸업구분</th>
                                        <td colSpan={3}></td>
                                    </tr>
                                    <tr>
                                        <th>전공명</th>
                                        <td colSpan={3}></td>
                                    </tr>
                                    <tr>
                                        <th>부전공명/복수전공</th>
                                        <td></td>
                                        <th>학점</th>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th>기간</th>
                                        <td colSpan={3}></td>
                                    </tr>
                                </table>
                                <div style={{margin: "15px"}}>
                                    <Typography variant="body2" gutterBottom>
                                        *학점의 만점이 10점을 초과하는 경우, 10점 만점 기준으로 환산하여 입력해 주시기 바랍니다.
                                    </Typography>
                                    <Typography variant="body2" gutterBottom>
                                        *대학 편입의 경우 입학학교와 졸업학교를 모두 기재해 주세요
                                    </Typography>
                                </div>

                            </div>
                        </div>

                        <div className="w3-container" style={{marginTop: "30px"}}>
                            <h3>대학원</h3>
                            <table className="w3-table w3-bordered" style={{borderTop: "solid"}}>
                                <tr>
                                    <th>학위구분</th>
                                    <th>학교명</th>
                                    <th>기간</th>
                                    <th>전공명</th>
                                    <th>학점</th>
                                    <th>비고</th>
                                </tr>
                                <tr>
                                    <td colSpan={6} style={{textAlign: "center", paddingTop: "12px"}}>
                                        <Typography variant="body2" gutterBottom>
                                            복수 등록이 가능합니다 아래 입력란을 이용하여 추가해주세요
                                        </Typography>
                                    </td>
                                </tr>
                            </table>

                            <div className="w3-container" style={{margin: "8px"}}>
                                <h6>등록</h6>
                                <table className="w3-table w3-bordered" style={{borderTop: "solid"}}>
                                    <tr>
                                        <th>학위구분</th>
                                        <td colSpan={3}></td>
                                    </tr>
                                    <tr>
                                        <th>학교명</th>
                                        <td colSpan={3}></td>
                                    </tr>
                                    <tr>
                                        <th>졸업구분</th>
                                        <td colSpan={3}></td>
                                    </tr>
                                    <tr>
                                        <th>전공명</th>
                                        <td colSpan={3}></td>
                                    </tr>
                                    <tr>
                                        <th>세부전공명</th>
                                        <td></td>
                                        <th>학점</th>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th>기간</th>
                                        <td colSpan={3}></td>
                                    </tr>
                                    <tr>
                                        <th>논문명</th>
                                        <td></td>
                                        <th>지도교수</th>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th>논문요약</th>
                                        <td colSpan={3}></td>
                                    </tr>
                                </table>
                                <div style={{margin: "15px"}}>
                                    <Typography variant="body2" gutterBottom>
                                        *학점의 만점이 10점을 초과하는 경우, 10점 만점 기준으로 환산하여 입력해 주시기 바랍니다.
                                    </Typography>
                                </div>

                            </div>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default withStyles(useStyles)(BasicPersonalInformation)