/* eslint-disable jsx-a11y/anchor-is-valid */
import React , {useState,useEffect} from "react";
import { withFormik } from "formik";
import * as Yup from "yup";
import { withStyles, createStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import { propsDormForm} from "./typeForm";
import { useHistory } from "react-router-dom";
import {Navbar,Nav,Row,Col,Button } from "react-bootstrap";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const styles = createStyles({
  black: {
    color: "black",
  },
  button: {
    marginRight: "10px",
  },
  navCenter: {
    position: "absolute",
    width: "100%",
    textAlign: "center",
    overflow: "visible",
    height: "0",
    left: "0%",
    color: "white",
  },
  textField: {
    width: "350px",
  },
  formLabel: {
    textAlign: "left",
    fontSize: "1.5rem",
    color: "black",
  },
  row: {
    marginBottom: "3%",
  },
});

function DormOwner(props: any) {
  useEffect(() => {
    document.body.style.backgroundColor = "white";
  }, []);
  const history = useHistory();
  const [show, setShow] = useState<boolean>(false);
  const handleClose = () => {
    setShow(false);
  };
  const {
    classes,
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
  } = props;
  return (
    <div>
      <Navbar style={{ padding: "1%" }} bg="danger">
        <Nav className="text-center">
          <Button variant="" onClick={() => history.goBack()}>
            <ArrowBackIosIcon htmlColor="white" fontSize="large" />
          </Button>
          <h1 className={classes.navCenter}>Add Dorm</h1>
        </Nav>
      </Navbar>
      <form style={{ margin: "3% 20%" }} onSubmit={handleSubmit}>
        <Row className={classes.row} noGutters={true}>
          <Col>
            <FormControl component="fieldset">
              <FormLabel
                error={touched.DormName && Boolean(errors.DormName)}
                className={classes.formLabel}
              >
                Dorm Name
              </FormLabel>
              <TextField
                id="DormName"
                placeholder="Enter Dorm Name"
                className={classes.textField}
                value={values.DormName}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.DormName ? errors.DormName : ""}
                error={touched.DormName && Boolean(errors.DormName)}
                margin="dense"
                variant="outlined"
              />
            </FormControl>
          </Col>
          <Col>
            <FormControl component="fieldset">
              <FormLabel
                error={touched.DormAddress && Boolean(errors.DormAddress)}
                className={classes.formLabel}
              >
                Dorm Address
              </FormLabel>
              <TextField
                id="DormAddress"
                placeholder="Enter Dorm Address"
                value={values.DormAddress}
                className={classes.textField}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.DormAddress ? errors.DormAddress : ""}
                error={touched.DormAddress && Boolean(errors.DormAddress)}
                margin="dense"
                variant="outlined"
              />
            </FormControl>
          </Col>
        </Row>
        <Row className={classes.row} noGutters={true}>
          <Col>
            <FormControl component="fieldset">
              <FormLabel
                error={touched.DormLongitude && Boolean(errors.DormLongitude)}
                className={classes.formLabel}
              >
                Dorm Longitude
              </FormLabel>
              <TextField
                id="DormLongitude"
                placeholder="Enter Dorm Longitude"
                value={values.DormLongitude}
                className={classes.textField}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.DormLongitude ? errors.DormLongitude : ""}
                error={touched.DormLongitude && Boolean(errors.DormLongitude)}
                margin="dense"
                variant="outlined"
              />
            </FormControl>
          </Col>
          <Col>
            <FormControl component="fieldset">
              <FormLabel
                error={touched.DormLatitude && Boolean(errors.DormLatitude)}
                className={classes.formLabel}
              >
                Dorm Latitude
              </FormLabel>
              <TextField
                id="DormLatitude"
                className={classes.textField}
                placeholder="Enter Dorm Latitude"
                value={values.DormLatitude}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.DormLatitude ? errors.DormLatitude : ""}
                error={touched.DormLatitude && Boolean(errors.DormLatitude)}
                margin="dense"
                variant="outlined"
              />
            </FormControl>
          </Col>
        </Row>
        <Row className={classes.row} noGutters={true}>
          <Col>
            <FormControl component="fieldset">
              <FormLabel
                error={touched.phone && Boolean(errors.phone)}
                className={classes.formLabel}
              >
              Dorm Phone Number
              </FormLabel>
              <TextField
                id="phone"
                placeholder="Enter Phone Number"
                value={values.phone}
                className={classes.textField}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.phone ? errors.phone : ""}
                error={touched.phone && Boolean(errors.phone)}
                margin="dense"
                variant="outlined"
              />
            </FormControl>
          </Col>
          <Col>
            <FormControl component="fieldset">
              <FormLabel
                error={touched.email && Boolean(errors.email)}
                className={classes.formLabel}
              >
                Dorm E-mail
              </FormLabel>
              <TextField
                id="email"
                placeholder="Enter your email"
                type="email"
                className={classes.textField}
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.email ? errors.email : ""}
                error={touched.email && Boolean(errors.email)}
                margin="dense"
                variant="outlined"
              />
            </FormControl>
          </Col>
        </Row>
        <Row noGutters={true} className={classes.row}>
          <Col>
            <FormControl component="fieldset">
              <FormLabel
                error={
                  touched.LineID && Boolean(errors.LineID)
                }
                className={classes.formLabel}
              >
                Dorm Line ID
              </FormLabel>
              <TextField
                id="LineID"
                placeholder="Enter Line ID"
                className={classes.textField}
                value={values.LineID}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={
                  touched.LineID ? errors.LineID : ""
                }
                error={
                  touched.LineID && Boolean(errors.LineID)
                }
                margin="dense"
                variant="outlined"
              />
            </FormControl>
          </Col>
          <Col>
            <FormControl component="fieldset">
              <FormLabel
                error={
                  touched.Website && Boolean(errors.Website)
                }
                className={classes.formLabel}
              >
                Dorm Website
              </FormLabel>
              <TextField
                id="Website"
                placeholder="Enter Dorm Website"
                className={classes.textField}
                value={values.Website}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={
                  touched.Website ? errors.Website : ""
                }
                error={
                  touched.Website && Boolean(errors.Website)
                }
                margin="dense"
                variant="outlined"
              />
            </FormControl>
          </Col>
        </Row>
        <Row  noGutters={true} className={classes.row}>
          <Col>
          <div
              style={{
                textAlign: "left",
                display: "inline-block",
                width: "350px",
              }}
            >
            <TextField
              name="upload-photo"
              type="file"
            />
            </div>
          </Col>
          <Col></Col>
        </Row>
        <Row className={classes.row} noGutters={true}>
          <Col>
            <div
              style={{
                textAlign: "left",
                display: "inline-block",
                width: "350px",
              }}
            >
          
              <Button
                className={classes.button}
                variant="secondary"
                type="submit"
                disabled={isSubmitting}
              >
                SUBMIT
              </Button>
              <Button
                className={classes.button}
                variant="danger"
                onClick={handleReset}
              >
                CLEAR
              </Button>
            </div>
          </Col>
          <Col></Col>
        </Row>
      </form>
    </div>
  );
}
const DormOwnerForm = withFormik({
  mapPropsToValues: ({
    DormName,
    DormAddress,
    email,
    phone,
    DormLongitude,
    DormLatitude,
    LineID,
    Website,
  }: propsDormForm) => {
    return {
      DormName: DormName || "",
      DormAddress: DormAddress || "",
      email: email || "",
      DormLongitude: DormLongitude || "",
      DormLatitude: DormLatitude || "",
      LineID: LineID || "",
      phone: phone || "",
      Website: Website || "",
    };
  },
  validationSchema: Yup.object().shape({
    DormName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string()
      .email("Enter a valid email")
      .required("Email is required"),
  }),

  handleSubmit: (values, { resetForm }) => {
    const { DormName, DormAddress, email, DormLatitude,DormLongitude, phone, LineID,Website } = values;
    const form = {
      DormName,
      DormAddress,
      DormLatitude,
      DormLongitude,
      phone,
      email,
      LineID,
      Website,
    };
    setTimeout(() => {
      alert(JSON.stringify(form));
    }, 1000);
    resetForm();
  },
})(DormOwner);

export default withStyles(styles)(DormOwnerForm);
