export default function Button(prop) {
  console.log(prop);
  return (
    <div className={`btn-container `}>
      <button className={`btn ${prop.classname}`}>{prop.text}</button>
    </div>
  );
}
