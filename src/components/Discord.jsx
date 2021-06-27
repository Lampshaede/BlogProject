import {
  DiscordDefaultOptions,
  DiscordOptionsContext,
  DiscordMessage,
  DiscordMessages,
} from "@danktuary/react-discord-message";
// DiscordMention also valid
const Discord = () => {
  const discordOptions = {
    ...DiscordDefaultOptions,
    avatars: {
      ...DiscordDefaultOptions.avatars,
      default: DiscordDefaultOptions.avatars.green,
      jojo: "https://i.imgur.com/BOlehTj.jpg",
      generalgrievous:
        "https://media.discordapp.net/attachments/303544651200331776/857114065696456744/latest.png?width=554&height=702",
      phil: "https://media.discordapp.net/attachments/303544651200331776/857116600782946325/5SUMEYWRVRCUHI5JR3DZJJLDVY.png?width=1054&height=702",
			clyde: 'https://cdn.discordapp.com/attachments/303544651200331776/857120188360294450/Ve5T79xYee_oK4NezqZwrA.png',
    },
    profiles: {
      lamp: {
        author: "Lampshaede",
        avatar:
          "https://media.discordapp.net/attachments/303544651200331776/857110373869551666/lamp.png?width=702&height=702",
        roleColor: "#498efc",
      },
      jon: {
        author: "Jon",
        avatar: "jojo",
        roleColor: "#D3A588",
      },
      greeves: {
        author: "Qymaen jai Sheelal",
        avatar: "generalgrievous",
        roleColor: "#E0f6ee",
      },
      phil: {
        author: "phil",
        avatar: "phil",
        roleColor: "#dac2b1",
      },
      clyde: {
        author: "Clyde",
        avatar: "clyde",
				bot: true,
        roleColor: "#FFFFFF",
      },
    },
  };

  return (
    <DiscordOptionsContext.Provider value={discordOptions}>
      <DiscordMessages>
        <DiscordMessage profile="clyde">Nobody will ever see this message. The header should cover it</DiscordMessage>
        <DiscordMessage profile="clyde">Welcome to Discord! Why don't we all take a moment to introduce ourselves?</DiscordMessage>
        <DiscordMessage profile="lamp">Hi I'm Luke!</DiscordMessage>
        <DiscordMessage profile="jon">Hello there</DiscordMessage>
        <DiscordMessage profile="greeves">General Kenobi?</DiscordMessage>
        <DiscordMessage profile="jon">
          <div>You're lost man</div> 
					<div>hes not here</div>
        </DiscordMessage>
        <DiscordMessage profile="clyde">Welcome to Discord! Why don't we all take a moment to introduce ourselves?</DiscordMessage>
        <DiscordMessage profile="lamp">Hi I'm Luke!</DiscordMessage>
        <DiscordMessage profile="jon">Hello there</DiscordMessage>
        <DiscordMessage profile="greeves">General Kenobi?</DiscordMessage>
        <DiscordMessage profile="jon">
          <div>You're lost man</div> 
					<div>hes not here</div>
        </DiscordMessage>
        <DiscordMessage profile="phil">
          Hello?
        </DiscordMessage>
        <DiscordMessage profile="clyde">Welcome to Discord! Why don't we all take a moment to introduce ourselves?</DiscordMessage>
        <DiscordMessage profile="lamp">Hi I'm Luke!</DiscordMessage>
        <DiscordMessage profile="phil">
          You guys don't notice anything weird happening here?
        </DiscordMessage>
        <DiscordMessage profile="lamp">
          ??? what are you talking about
        </DiscordMessage>
        <DiscordMessage profile="phil">
          Are you lagging or something? You all just started repeating
          yourselves
        </DiscordMessage>
				<DiscordMessage profile="greeves">You are a bold one to make such claims</DiscordMessage> 
        <DiscordMessage profile="phil">
          im not sure thats quite it
        </DiscordMessage>
      </DiscordMessages>
    </DiscordOptionsContext.Provider>
  );
};
export default Discord;
