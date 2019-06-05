# -*- coding: utf-8 -*-
#from setuptools import setup, find_packages
#from pip.req import parse_requirements
#import re, ast

from setuptools import setup, find_packages
import re, ast

with open('requirements.txt') as f:
        install_requires = f.read().strip().split('\n')

# get version from __version__ variable in mtmlogistic/__init__.py
_version_re = re.compile(r'__version__\s+=\s+(.*)')

with open('bdtheme/__init__.py', 'rb') as f:
        version = str(ast.literal_eval(_version_re.search(
                f.read().decode('utf-8')).group(1)))

# get version from __version__ variable in bdtheme/__init__.py
#_version_re = re.compile(r'__version__\s+=\s+(.*)')

#with open('bdtheme/__init__.py', 'rb') as f:
#    version = str(ast.literal_eval(_version_re.search(
#        f.read().decode('utf-8')).group(1)))
#
#requirements = parse_requirements("requirements.txt", session="")

setup(
	name='bdtheme',
	version=version,
	description='bd theme',
	author='vinhbk2000',
	author_email='vinhbk2000@gmail.com',
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
