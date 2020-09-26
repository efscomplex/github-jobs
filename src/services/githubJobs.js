const defOpts = {}
const URL_GITHUB_JOBS =
	'https://cors-anywhere.herokuapp.com/jobs.github.com/positions.json?'

export default async function getJobs(opts = defOpts) {
	let jobs = null
	const { location = '', description = '', fullTime = '', page = '1' } = opts
	const url = `${URL_GITHUB_JOBS}location=${location}&description=${description}&full_time${fullTime}&page=${page}`

	try {
		const resp = await fetch(url, {
			headers: {
				origin: '*',
			},
		})
		jobs = await resp.json(url)
	} catch (err) {
		alert('ups!!!! an error: ', err)
	}

	return jobs || []
}
