import CoreConcept from "./CoreConcept"
import { CORE_CONCEPTS } from "../data"

export default function CoreConcepts() {
    return (
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
    )
}