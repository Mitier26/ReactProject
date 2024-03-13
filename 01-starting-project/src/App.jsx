
import {useState} from 'react';
import { CORE_CONCEPTS } from "./data";
import { EXAMPLES } from './data';
import componentsImg from './assets/components.png';
import Header from "./components/Header/Header.jsx"
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleClick(selectedButton) {

    setSelectedTopic(selectedButton);
  }

  let tabContent = <p>Please select a Topic.</p>

  if(selectedTopic) {
    tabContent = (
      <div id='tab-content'>
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
              {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>
    )
  }

  return (
    <div>
      <Header></Header>
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((item)=><CoreConcept key={item.title} {...item}></CoreConcept> )}
            {/* <CoreConcept title='Components' description='The Core Ui building block' image={componentsImg}></CoreConcept>
            <CoreConcept title={CORE_CONCEPTS[1].title} description={CORE_CONCEPTS[1].description} image={CORE_CONCEPTS[1].image}></CoreConcept>
            <CoreConcept title={CORE_CONCEPTS[2].title} description={CORE_CONCEPTS[2].description} image={CORE_CONCEPTS[2].image}></CoreConcept>
            <CoreConcept {...CORE_CONCEPTS[3]}></CoreConcept> */}
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleClick('components')}>Component</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleClick('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleClick('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleClick('state')}>State</TabButton>
          </menu>
            {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
