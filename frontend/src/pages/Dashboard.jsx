import CardB from "@components/dashboard/CardB"
import CardC from "@components/dashboard/CardC"
import CardM from "@components/dashboard/CardM"
import Main from "@components/dashboard/Main"
import List from "@components/dashboard/List"
import { ListProvider } from "@context/ListContext"
const Dashboard = () => {



    return (
        <ListProvider>
            <div className="d-flex">
                <Main className="col-2 position-fixed top-0 start-0" />
                <div className="col-10 p-5 ">
                    <h1>Panel General</h1>

                    <div className="d-flex justify-content-between mt-4">
                        <CardM />
                        <CardC />
                        <CardB />
                    </div>

                    <List />

                </div>
            </div >
        </ListProvider >
    )
}

export default Dashboard
