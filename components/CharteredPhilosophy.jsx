import Image from 'next/image'

const CharteredPhilosophy = () => {
  return (
    <div className="w-100">
      <div className="chartered-philosophy-con d-flex justify-content-between align-items-center p-5">
        <div className="ms-5 mb-4">
          <Image
            src="/homePage/Group 49823.svg"
            className="ms-5"
            alt=""
            width={380}
            height={300}
          />
        </div>
        <div className="horizontal-line" />
        <div className="w-50 mt-4">
          <p className="fst-italic">
            What man conceives in his mind, that he expresses through speech,
            and that he does by deed. -
            <span className="fst-normal fw-bold">Taittiriya Aranyaka</span>
          </p>
          <p>
            This supreme virtue of there being no variance in our thought, words
            and action, though hard to practice, remains steadfast as our
            guiding philosophy. We have even rejected many business
            opportunities - for they did not fall within the framework of our
            philosophy.
          </p>
        </div>
      </div>
    </div>
  )
}

export default CharteredPhilosophy
