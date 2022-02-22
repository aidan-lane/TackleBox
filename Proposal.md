# TackleBox

===========
[https://github.com/aidan-lane/oss-term-project](https://github.com/aidan-lane/oss-term-project)

Overview
--------
The most common security issue amongst companies all across the countries is phishing scams. Constant training is conducted within companies' security teams, however it seemingly makes no difference. Technology professionals are more versed in the world of identifying scams when it comes to phishing, however workers in high speed jobs such as nurses and surgeons, do not have time to analyze every email they receieve. We are proposing a safety net between the user and the link they are clicking. Before a page can redirect after a link is clicked, PhishNet will run the link through a virus scanner and return a safety score. If the score is above a certain threshold, users will be warned before they are allowed to redirect to the page. This takes away the responsibility of the user from having to analyze every link they click while still protecting them from hasty decisions.

Semester Plan
-------------
This project was previously developed in a class called Software Design and Documentation, by the name of [Second Chance](https://github.com/gwang111/SecondChance). The project was only semi succesful, as redirects stopped only some of the times that links were detected as dangerous. PhishNet will be the new and improved version of Second Chance. The most important focus of this project will be a full stop before a page is allowed to reload. This ensures that viruses cannot be downloaded from malicious sites. We will also need to focus on making a database to hold whitelisted and blacklisted sites to make user experience easier.

Technology
----------
This project will be built as a Chrome extension which primarily uses JavaScript, HTML, and CSS. In addition to these languages, we will also being using a backend written in either JavaScript or Python (Flask/Django) to interface with a PostgresSQL Database.

Team
----
| **Name** | **GitHub Handle** | **Email** |
|:------:|:-------:|:------:|
| Caitlin Crowley | crowlc3 | crowlc3@rpi.edu | 
| Ryan Kent | ryantk3nt | kentr@rpi.edu |
| Aidan Lane | aidan-lane | lanea3@rpi.edu | 
| Erik Roberts | robere2 | robere2@rpi.edu |

Milestones
----------
Milestones are given as weeks from project start:

- By Week 1 : Investigate the **Unknown** language options and choose one best suited to encapsulate what we don't know.
- By Week 4 : Obtain unknown information on 6 things that 6 random strangers don't know.
- By Week 7 : Have the informaton from the last stranger. We assume that strangers who don't know things will become harder to find once more people know what we are doing.
- By Week 9: Have the seven unknowns coded into the chosen (unknown) language.
- By Week 10 : Completely develop the website that uses deep learning and artificial intelligence to source a cooperative crowd, decide what they don't know and automatically encode it into the chosen language. 
