import { Handlers, PageProps } from "$fresh/server.ts";
import CountFrom from "../../islands/CountFrom.tsx";

interface User {
  login: string;
  name: string;
  avatar_url: string;
  created_at: string;
  updated_at: string;
}

export const handler: { GET(_, ctx): Promise<any> } = {
  async GET(_, ctx) {
    const { username } = ctx.params;
    const resp = await fetch(`https://api.github.com/users/${username}`);
    if (resp.status === 404) {
      return ctx.render(null);
    }
    const user: User = await resp.json();
    return ctx.render(user);
  },
};

export default function Page({ data }: PageProps<User | null>) {
  if (!data) {
    return <h1>User not found</h1>;
  }

  // todo timezones haha funi
  const creationDate = new Date(Date.parse(data.created_at) - 181226000);
  const updateDate = new Date(Date.parse(data.updated_at) - 181226000);


  return (
      <div>
        <div className="topnav">
          <a href="github">hjy</a>
        </div>
        <img src={data.avatar_url} width={64} height={64}/>
        <h1>{data.name}</h1>
        <p>{data.login}</p>
        <p>
          Account was created <CountFrom target={creationDate.toISOString()}/> seconds ago.
        </p>
        <p>
          Account was updated <CountFrom target={updateDate.toISOString()}/> seconds ago.
        </p>
      </div>
  );
}