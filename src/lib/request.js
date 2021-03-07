import superagent from 'superagent';
import superagentPromisePlugin from 'superagent-promise-plugin';

const requestAgent = superagentPromisePlugin.patch(superagent);

export default requestAgent;
