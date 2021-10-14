import React from "react";
import Button from "erxes-ui/lib/components/Button";
import Table from "erxes-ui/lib/components/table/index";
import styles from "../../src/components/styles.module.css";
import CodeBlock from "@theme/CodeBlock";
import "erxes-icon/css/erxes.min.css";

export function ButtonComponent(props) {
  const { type, buttons = [], icons = [], table = [] } = props;

  if (type === "type") {
    return (
      <>
        <div className={styles.styled}>
          <Button>Default</Button>
          {buttons.map((e) => (
            <Button key={Math.random()} btnStyle={e.toLowerCase()}>
              {" "}
              {e}
            </Button>
          ))}
        </div>
        <CodeBlock className="language-jsx">
          {`<>`}
          {`\n\t<Button>Default</Button>`}
          {`${buttons.map(
            (e) => `\n\t<Button btnStyle="${e.toLowerCase()}">${e}</Button>`
          )}`}
          {`\n</>`}
        </CodeBlock>
      </>
    );
  }

  if (type === "size") {
    return (
      <>
        <div className={styles.styled}>
          {buttons.map((e) => (
            <Button key={Math.random()} size={e.toLowerCase()}>
              {" "}
              {e}
            </Button>
          ))}
        </div>
        <CodeBlock className="language-jsx">
          {`<>`}
          {`\n\t<Button>Default</Button>`}
          {`${buttons.map(
            (e) => `\n\t<Button size="${e.toLowerCase()}">${e}</Button>`
          )}`}
          {`\n</>`}
        </CodeBlock>
      </>
    );
  }

  if (type === "activity") {
    return (
      <>
        <div className={styles.styled}>
          <Button>Normal</Button>
          <Button key={Math.random()} disabled>
            Disabled
          </Button>
        </div>
        <CodeBlock className="language-jsx">
          {`<>`}
          {`\n\t<Button>Normal</Button>`}
          {`\n\t<Button disabled>Disabled</Button>`}
          {`\n</>`}
        </CodeBlock>
      </>
    );
  }

  if (type === "uppercase") {
    return (
      <>
        <div className={styles.styled}>
          <Button>Normal</Button>
          <Button key={Math.random()} uppercase>
            Uppercase
          </Button>
        </div>
        <CodeBlock className="language-jsx">
          {`<>`}
          {`\n\t<Button>Normal</Button>`}
          {`\n\t<Button uppercase>Uppercase</Button>`}
          {`\n</>`}
        </CodeBlock>
      </>
    );
  }

  if (type === "block") {
    return (
      <>
        <div className={styles.styled}>
          <Button key={Math.random()} block>
            Block
          </Button>
        </div>
        <CodeBlock className="language-jsx">
          {`<>`}
          {`\n\t<Button block>Block</Button>`}
          {`\n</>`}
        </CodeBlock>
      </>
    );
  }

  if (type === "icon") {
    return (
      <>
        <div className={styles.styled}>
          {buttons.map((e, index) => (
            <Button
              key={Math.random()}
              btnStyle={e.toLowerCase()}
              icon={icons[index]}
            >
              {" "}
              {e}
            </Button>
          ))}
        </div>
        <CodeBlock className="language-jsx">
          {`<>`}
          {`${buttons.map(
            (e, index) =>
              `\n\t<Button btnStyle="${e.toLowerCase()}" icon="${
                icons[index]
              }">${e}</Button>`
          )}`}
          {`\n</>`}
        </CodeBlock>
      </>
    );
  }

  if (type === "APIbutton") {
    return (
      <>
        <CodeBlock className="language-javascript">{`import Button from "erxes-ui/lib/components/Button";`}</CodeBlock>
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {table.map(( row, i ) => (
              <tr>
                {row.map((cell) => (
                  <td>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
          {/* {table.map(i, value => value.map((number) => (
            if(i === 0) {
              console
            }
          )))} */}
          {/* {table.map(value => value.map(number => number * 2))} */}
          {/* {table.map(( row, index ) => (
            row.map(( cell, index ) => (
              console.log(table[ind])
            ))
          ))} */}
          {/* {for (let i = 0; i < table.length(); i++) {
            // for (let j = 0; j < 4; j++) {
              if(i === 0) {
                <thead>
                  <tr>
                    <th>g</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                  </tr>
                </thead>
              }
            // }
          }} */}
          {/* {table.map((e, index) => (
            
          ))} */}
        </Table>
      </>
    );
  }

  return null;
}
