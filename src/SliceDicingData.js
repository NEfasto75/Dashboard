import { useSelector } from "react-redux";
import Charts from "./components/Charts";
import Input from "./components/Input";
import NoData from "./components/NoData";

const SliceDicingData = () => {
    const students = useSelector(state => state.data.students);
    const names = students.map(student => student.name);
    let uniqueNames = [...new Set(names)];

    const chekedStudents = useSelector(state => state.data.chekedStudents);

    const subjectFun = (checkedStudent) => {
        let totalFun = 0;
        students.forEach(student => {
            if (student.name === checkedStudent) {
                totalFun += parseInt(student.fun);
            }
        });
        const amount = students.filter(student => student.name === checkedStudent).length;

        const averageFun = (totalFun / amount).toFixed(1);
        return averageFun
    }

    const subjectDifficulty = (checkedStudent) => {
        let totalDifficulty = 0;
        students.forEach(student => {
            if (student.name === checkedStudent) {
                totalDifficulty += parseInt(student.difficulty);
            }
        });
        const amount = students.filter(student => student.name === checkedStudent)
            .length

        const averageFun = (totalDifficulty / amount).toFixed(1);
        return averageFun
    }


    const data = chekedStudents.map(checkedStudent => {
        const array = {
            subject: checkedStudent,
            fun: subjectFun(checkedStudent),
            difficulty: subjectDifficulty(checkedStudent)
        }
        return array
    });

    return (
        <div className="container-fluid bg-secondary">
            <h1 className="display-3 py-4 text-center text-dark">Individual Information</h1>
            <div className="row justify-content-between align-items-center">
                <div className="col-5 col-sm-2 text-start">
                    <ul className="slice-chart-ul">
                        {uniqueNames.map((name, index) => (
                            <Input key={index} name={name} id={index} />
                        )
                        )}
                    </ul>
                </div>
                <div className="col-7 col-sm-10 text-center">

                    {chekedStudents.length >= 1 ? <Charts data={data} /> : <NoData />}
                </div>
            </div>
        </div>
    );
}

export default SliceDicingData;