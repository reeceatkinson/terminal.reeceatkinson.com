// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'sumfetch' to display summary.
Type 'sudo'
Type 'ls'
Type 'repo'
Type 'about'
Type 'email'
Type 'google + your search'
Type 'bing + your search'
Type 'duckduckgo + your search'
Type 'echo + your message'
Type 'date' if you are a time traveler

`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening GitHub repository...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}. 
Welcome to my website!
I am Reece Atkinson. A frontend developer who creates great user experiences through design and performance. Type email to contact me!`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening GitHub...';
};


// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `Searching duckduckgo for ${args.join(' ')}...`;
};

export const bing = async (args: string[]): Promise<string> => {
  window.open(`https://bing.com/search?q=${args.join(' ')}`);
  return `Wow, really? You are using bing for ${args.join(' ')}?`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};


export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};


export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return `Permission denied: with little power comes... no responsibility? `;
};

// Banner
export const banner = (args?: string[]): string => {
  return `                                                                                            
  RRRRRRRRRRRRRRRRR                                                                                   
  R::::::::::::::::R                                                                                  
  R::::::RRRRRR:::::R                                                                                 
  RR:::::R     R:::::R                                                                                
    R::::R     R:::::R    eeeeeeeeeeee        eeeeeeeeeeee        cccccccccccccccc    eeeeeeeeeeee    
    R::::R     R:::::R  ee::::::::::::ee    ee::::::::::::ee    cc:::::::::::::::c  ee::::::::::::ee  
    R::::RRRRRR:::::R  e::::::eeeee:::::ee e::::::eeeee:::::ee c:::::::::::::::::c e::::::eeeee:::::ee
    R:::::::::::::RR  e::::::e     e:::::ee::::::e     e:::::ec:::::::cccccc:::::ce::::::e     e:::::e
    R::::RRRRRR:::::R e:::::::eeeee::::::ee:::::::eeeee::::::ec::::::c     ccccccce:::::::eeeee::::::e
    R::::R     R:::::Re:::::::::::::::::e e:::::::::::::::::e c:::::c             e:::::::::::::::::e 
    R::::R     R:::::Re::::::eeeeeeeeeee  e::::::eeeeeeeeeee  c:::::c             e::::::eeeeeeeeeee  
    R::::R     R:::::Re:::::::e           e:::::::e           c::::::c     ccccccce:::::::e           
  RR:::::R     R:::::Re::::::::e          e::::::::e          c:::::::cccccc:::::ce::::::::e          
  R::::::R     R:::::R e::::::::eeeeeeee   e::::::::eeeeeeee   c:::::::::::::::::c e::::::::eeeeeeee  
  R::::::R     R:::::R  ee:::::::::::::e    ee:::::::::::::e    cc:::::::::::::::c  ee:::::::::::::e  
  RRRRRRRR     RRRRRRR    eeeeeeeeeeeeee      eeeeeeeeeeeeee      cccccccccccccccc    eeeeeeeeeeeeee  
                                                                                                      
                                                                                                      
Type 'back' to go to my actual website.
Type 'sudo' for a lovely surprise!
Type 'help' to see the list of available commands.
Type 'sumfetch' to display summary.
Type 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for the Github repository.
`;
};
