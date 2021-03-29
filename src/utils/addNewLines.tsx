const addNewLines = (string: string | JSX.Element) =>
  typeof string !== 'string' || !string.includes('\n') ?
    string
    :
    string
      .split('\n')
      .map((paragraph, index) =>
        <div
          key={index}
          className="inherit-all"
        >
          {paragraph}
        </div>)


export default addNewLines