import "./App.css";
import Card from "./components/Card";
import ConditionContent from "./components/ConditionContent";
import DynamicListContent from "./components/DynamicListContent";
import DynamicStyle from "./components/DynamicStyle";
import OnlineShop from "./components/OnlineShop";
import TabButton from "./components/TabButton";
import UserCreate from "./components/UserCreate";
import UserLogin from "./components/UserLogin";

function App() {
  return (
    
    <>
      <section id="examples">
        <h2>Examples</h2>
        <menu>
          {/* task 1 */}

          {/* using children */}
          {/* <TabButton>Components</TabButton> */}

          {/* using attribute */}
          {/* <TabButton label="New Component"></TabButton> */}

          {/* task 2 */}

          <div id="app">
            <h1>Available Experts</h1>
            <Card name="Anthony Blake">
              <p>
                Blake is a professor of Computer Science at the University of
                Illinois.
              </p>
              <p>
                <a href="mailto:blake@example.com">Email Anthony</a>
              </p>
            </Card>

            <Card name="Maria Miles">
              <p>
                Maria is a professor of Computer Science at the University of
                Illinois.
              </p>
              <p>
                <a href="mailto:blake@example.com">Email Maria</a>
              </p>
            </Card>
          </div>
        </menu>

        {/* task 3 */}

        <UserLogin />


        {/* task 4 */}

        <UserCreate />


        {/* task 5 */}

        <OnlineShop />


        {/* task 6 */}

        <ConditionContent />


        {/* task 7 */}

        <DynamicStyle />


        {/* task 8 */}

        <DynamicListContent />

      </section>
    </>
  );
}

export default App;
