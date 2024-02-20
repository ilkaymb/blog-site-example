import Link from "next/link";
import Accordion from "react-bootstrap/Accordion";

function FooterMenuDropdown({ items }) {
  return (
    <Accordion defaultActiveKey="1" style={{ backgroundColor: "transparent" }}>
      <Accordion.Item
        eventKey="1"
        style={{ width: "200px", backgroundColor: "transparent" }}
      >
        <Accordion.Header>{items.title}</Accordion.Header>
        <Accordion.Body>
          {items.links.map((item, index) => (
            <Link
              href={item.href}
              key={index}
              className="block w-full h-full px-3 py-2"
            >
              {item.title}
            </Link>
          ))}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default FooterMenuDropdown;
