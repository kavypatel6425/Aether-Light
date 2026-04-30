import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";

const filtersData = [
  {
    title: "AVAILABILITY",
    options: ["In Stock", "Out of Stock"],
  },
  {
    title: "PRICE",
    options: ["Under ₹50,000", "₹50,000 - ₹100,000"],
  },
  {
    title: "APPLICATION LOCATION",
    options: ["Living Room", "Dining Room"],
  },
  {
    title: "BODY COLOR",
    options: ["Gold", "Black", "Silver"],
  },
  {
    title: "COUNTRY OF ORIGIN",
    options: ["India", "Italy"],
  },
  {
    title: "DIAMETER",
    options: ["Small", "Medium", "Large"],
  },
  {
    title: "LENGTH",
    options: ["Short", "Medium", "Long"],
  },
];

export default function Sidebar() {
  return (
    <div style={{ width: "260px", borderRight: "1px solid #ddd" }}>
      <Accordion flush>
        {filtersData.map((filter, index) => (
          <Accordion.Item eventKey={index.toString()} key={index}>
            <Accordion.Header style={{ fontSize: "13px" }}>
              {filter.title}
            </Accordion.Header>

            <Accordion.Body>
              {filter.options.map((option, i) => (
                <Form.Check
                  key={i}
                  type="checkbox"
                  label={option}
                  style={{ marginBottom: "8px", fontSize: "13px" }}
                />
              ))}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
}