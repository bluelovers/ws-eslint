async function validInTryCatch1()
{
	try
	{
		return await Promise.resolve('try');
	}
	catch (e)
	{}
}

async function validInTryCatch2()
{
	try
	{
		throw new Error('error');
	}
	catch (e)
	{
		return Promise.resolve('catch');
	}
}

async function validInTryCatch3()
{
	try
	{
		throw new Error('error');
	}
	catch (e)
	{
		return await Promise.resolve('catch');
	}
	finally
	{
		console.log('cleanup');
	}
}

async function validInTryCatch4()
{
	try
	{
		throw new Error('error');
	}
	catch (e)
	{
		throw new Error('error2');
	}
	finally
	{
		return Promise.resolve('finally');
	}
}

async function validInTryCatch5()
{
	return Promise.resolve('try');
}

async function validInTryCatch6()
{
	return 'value';
}
