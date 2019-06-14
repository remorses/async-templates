import { strict as assert} from 'assert'
import { handler } from '../handler'


const defaults = {
    headers: {},
    path: '',
    query: '',
    method: "POST",
}

const log = data => console.log(JSON.stringify(data, null, '\t'))


it('works', async () => {
    const data = await handler({
        body: {
        },
        ...defaults
    })
    log(data)

})