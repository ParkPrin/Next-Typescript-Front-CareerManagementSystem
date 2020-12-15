import React from "react";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        careerRegisterModal: {
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

interface CareerRegisterModalProps {
    isCareerRegisterModalOpen : boolean
    closeIsCareerRegisterModalOpen() : void
}

export default function CareerRegisterModal(props:CareerRegisterModalProps){
    const classes = useStyles();
    return (
        <div>
            <Modal
                open={props.isCareerRegisterModalOpen}
                onClose={() => {props.closeIsCareerRegisterModalOpen()}}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div style={{top: '50%', left: '50%', transform: 'translate(-50%, -50%)', paddingLeft: "0px", paddingRight: "0px"}} className={classes.careerRegisterModal}>
                    <div style={{borderBottom: "solid", borderBottomWidth: "thin"}}>
                        <Typography variant="h6" gutterBottom style={{paddingLeft: "20px", color: "#2e86de", fontWeight: "bold"}}>
                            이력서 등록
                        </Typography>
                    </div>
                    <div style={{paddingLeft: "20px", paddingRight: "20px"}}>
                        <header style={{marginTop: "20px"}}>

                        </header>
                        <main>
                            <div style={{margin: "15px" }}>
                                <div style={{ backgroundColor: "#f5f6fa"}}>

                                </div>
                            </div>
                        </main>
                        <footer>

                        </footer>
                    </div>
                </div>

            </Modal>
        </div>
    )
}