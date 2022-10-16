import { Form, useLoaderData } from "react-router-dom";
import { getContact } from "./contacts";

export async function loader({ params }) {
  return getContact(params.contactId);
}
export default function Contact() {
  const contact = useLoaderData();

  return (
    <div id="contact">
      <div>
        <img key={contact.avatar} src={contact.avatar || null} />
      </div>

      <div>
        <h1>
          {contact.first || contact.last ? (
            <>
              {contact.first} {contact.last}
            </>
          ) : (
            <i>SIN NOMBRE</i>
          )}{" "}
          <Favorite contact={contact} />
        </h1>

        {contact.twitter && (
          <p>
            <a
              target="_blank"
              href={`https://scontent.faep7-1.fna.fbcdn.net/v/t1.6435-9/69607464_383529629237939_7559990877389586432_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHWa8WGHGlvk5wsJ2O4hK9v7yOAsE2khR7vI4CwTaSFHoh98HWp-YTbU5X2XVwGoLmhC1ENlI5G_lqIdJUQYpHp&_nc_ohc=70wtx4PfEe8AX_PDRYY&_nc_ht=scontent.faep7-1.fna&oh=00_AT-ifIjO6BRCHsKBKUdgqu2N08xPK4srHtt82W9tKCjBtw&oe=636EBE03`}
            >
              {contact.twitter}
            </a>
          </p>
        )}

        {contact.notes && <p>{contact.notes}</p>}

        <div>
          <Form action="edit">
            <button type="submit">EDITAR</button>
          </Form>
          <Form
            method="post"
            action="destroy"
            onSubmit={(event) => {
              if (!confirm("CONFIRME BORRADO")) {
                event.preventDefault();
              }
            }}
          >
            <button type="submit">BORRAR</button>
          </Form>
        </div>
      </div>
    </div>
  );
}

function Favorite({ contact }) {
  // yes, this is a `let` for later
  let favorite = contact.favorite;
  return (
    <Form method="post">
      <button
        name="favorite"
        value={favorite ? "false" : "true"}
        aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
      >
        {favorite ? "★" : "☆"}
      </button>
    </Form>
  );
}
