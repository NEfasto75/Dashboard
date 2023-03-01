import Charts from "./Charts";
import { useSelector } from "react-redux";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const StudentInfo = () => {
    const oneStudent = useSelector(state => state.data.singleStudent)
    console.log("single student:", oneStudent);
    const student = useSelector(state => state.data.student)
    return (
        <div className="bg-secondary">
            <h1 className="display-5 fw-bold text-center py-1">{student}</h1>
            <div className="text-end me-5 my-1">
                <Link to="/SingleStudent">
                    <Button variant="warning">back</Button>{' '}
                </Link>
            </div>
            <div className="single-student">
                {oneStudent.length > 1 && <Charts data={oneStudent} />}
            </div>
        </div>
    );
}

export default StudentInfo;